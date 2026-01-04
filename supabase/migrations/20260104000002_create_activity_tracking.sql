-- Create case_activities table for immutable audit log
-- Epic 6: Activity Tracking & Notifications

-- Create activity type enum
DO $$ BEGIN
    CREATE TYPE activity_type AS ENUM (
        'case_created',
        'data_submitted',
        'case_blocked',
        'case_completed',
        'file_uploaded',
        'case_reopened'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.case_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
  activity_type activity_type NOT NULL,
  actor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE SET NULL,
  actor_name TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  description TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS case_activities_case_id_idx ON public.case_activities(case_id);
CREATE INDEX IF NOT EXISTS case_activities_created_at_idx ON public.case_activities(created_at DESC);

-- Enable RLS
ALTER TABLE public.case_activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Read-only access based on case access
CREATE POLICY "Users can view activities for accessible cases"
  ON public.case_activities
  FOR SELECT
  USING (
    -- Customer can view their own case activities
    EXISTS (
      SELECT 1 FROM public.cases
      WHERE id = case_activities.case_id
      AND customer_id = auth.uid()
    )
    -- OR Expert can view assigned case activities
    OR EXISTS (
      SELECT 1 FROM public.cases
      WHERE id = case_activities.case_id
      AND assigned_expert_id = auth.uid()
    )
    -- OR Engineer can view all activities
    OR EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid()
      AND role = 'engineer'
    )
  );

-- Only allow INSERT (immutable log - no updates or deletes)
CREATE POLICY "Authenticated users can insert activities"
  ON public.case_activities
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Function to create activity log entry
CREATE OR REPLACE FUNCTION public.log_case_activity(
  p_case_id UUID,
  p_activity_type activity_type,
  p_description TEXT,
  p_metadata JSONB DEFAULT '{}'
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_actor_id UUID;
  v_actor_name TEXT;
  v_actor_role TEXT;
  v_activity_id UUID;
BEGIN
  -- Get current user info
  v_actor_id := auth.uid();

  SELECT full_name, role INTO v_actor_name, v_actor_role
  FROM public.profiles
  WHERE id = v_actor_id;

  -- Use email if name not set
  IF v_actor_name IS NULL THEN
    SELECT email INTO v_actor_name
    FROM public.profiles
    WHERE id = v_actor_id;
  END IF;

  -- Insert activity
  INSERT INTO public.case_activities (
    case_id,
    activity_type,
    actor_id,
    actor_name,
    actor_role,
    description,
    metadata
  ) VALUES (
    p_case_id,
    p_activity_type,
    v_actor_id,
    v_actor_name,
    v_actor_role,
    p_description,
    p_metadata
  ) RETURNING id INTO v_activity_id;

  RETURN v_activity_id;
END;
$$;

-- Trigger function for case creation
CREATE OR REPLACE FUNCTION public.trigger_log_case_created()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM public.log_case_activity(
    NEW.id,
    'case_created'::activity_type,
    'Case created',
    jsonb_build_object(
      'case_number', NEW.case_number,
      'responsible_actor', NEW.responsible_actor
    )
  );
  RETURN NEW;
END;
$$;

-- Trigger function for status changes
CREATE OR REPLACE FUNCTION public.trigger_log_case_status_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_activity_type activity_type;
  v_description TEXT;
  v_metadata JSONB;
BEGIN
  -- Only log if status actually changed
  IF OLD.status IS DISTINCT FROM NEW.status THEN

    -- Determine activity type and description
    IF NEW.status = 'data_submitted' THEN
      v_activity_type := 'data_submitted'::activity_type;
      v_description := 'Building data submitted for review';
      v_metadata := jsonb_build_object('previous_status', OLD.status);

    ELSIF NEW.status = 'blocked' THEN
      v_activity_type := 'case_blocked'::activity_type;
      v_description := 'Case blocked - corrections required';
      v_metadata := jsonb_build_object(
        'previous_status', OLD.status,
        'blocking_message', NEW.engineer_blocking_message
      );

    ELSIF NEW.status = 'completed' THEN
      v_activity_type := 'case_completed'::activity_type;
      v_description := 'Case completed - certificate ready';
      v_metadata := jsonb_build_object('previous_status', OLD.status);

    ELSIF NEW.status = 'waiting_for_data' AND OLD.status = 'blocked' THEN
      v_activity_type := 'case_reopened'::activity_type;
      v_description := 'Case reopened after corrections';
      v_metadata := jsonb_build_object('previous_status', OLD.status);

    ELSE
      -- Other status changes
      RETURN NEW;
    END IF;

    -- Log the activity
    PERFORM public.log_case_activity(
      NEW.id,
      v_activity_type,
      v_description,
      v_metadata
    );
  END IF;

  RETURN NEW;
END;
$$;

-- Attach triggers to cases table
DROP TRIGGER IF EXISTS trigger_case_created ON public.cases;
CREATE TRIGGER trigger_case_created
  AFTER INSERT ON public.cases
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_log_case_created();

DROP TRIGGER IF EXISTS trigger_case_status_changed ON public.cases;
CREATE TRIGGER trigger_case_status_changed
  AFTER UPDATE ON public.cases
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_log_case_status_change();

-- Add comment
COMMENT ON TABLE public.case_activities IS 'Immutable audit log for all case actions and status changes';
