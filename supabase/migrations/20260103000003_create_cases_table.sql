-- Create function to generate unique case numbers
CREATE OR REPLACE FUNCTION public.generate_case_number()
RETURNS TEXT AS $$
DECLARE
  today TEXT;
  seq_num INTEGER;
  case_num TEXT;
BEGIN
  today := TO_CHAR(NOW(), 'YYYYMMDD');

  -- Get next sequence number for today
  SELECT COUNT(*) + 1 INTO seq_num
  FROM public.cases
  WHERE case_number LIKE 'CASE-' || today || '-%';

  -- Format as CASE-YYYYMMDD-XXXX
  case_num := 'CASE-' || today || '-' || LPAD(seq_num::TEXT, 4, '0');

  RETURN case_num;
END;
$$ LANGUAGE plpgsql;

-- Create cases table
CREATE TABLE IF NOT EXISTS public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_number TEXT UNIQUE NOT NULL DEFAULT generate_case_number(),
  status TEXT NOT NULL CHECK (status IN ('waiting_for_data', 'data_submitted', 'blocked', 'completed')) DEFAULT 'waiting_for_data',
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  assigned_expert_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  responsible_actor TEXT NOT NULL CHECK (responsible_actor IN ('customer', 'expert')),
  engineer_blocking_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- Create trigger for updated_at
CREATE TRIGGER set_cases_updated_at
  BEFORE UPDATE ON public.cases
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes
CREATE INDEX IF NOT EXISTS cases_customer_id_idx ON public.cases(customer_id);
CREATE INDEX IF NOT EXISTS cases_assigned_expert_id_idx ON public.cases(assigned_expert_id);
CREATE INDEX IF NOT EXISTS cases_status_idx ON public.cases(status);
CREATE INDEX IF NOT EXISTS cases_created_at_idx ON public.cases(created_at DESC);

-- RLS Policies

-- Customers can view only their own cases
CREATE POLICY "Customers can view own cases"
  ON public.cases
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'customer'
      AND cases.customer_id = auth.uid()
    )
  );

-- Engineers can view all cases
CREATE POLICY "Engineers can view all cases"
  ON public.cases
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'engineer'
    )
  );

-- Experts can view assigned cases
CREATE POLICY "Experts can view assigned cases"
  ON public.cases
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'expert'
      AND cases.assigned_expert_id = auth.uid()
    )
  );

-- Engineers can insert/update/delete cases
CREATE POLICY "Engineers can manage cases"
  ON public.cases
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'engineer'
    )
  );

-- Add comment
COMMENT ON TABLE public.cases IS 'Cases table with 4-state lifecycle: waiting_for_data -> data_submitted -> blocked -> completed';
