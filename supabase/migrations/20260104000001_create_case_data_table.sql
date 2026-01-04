-- Create case_data table to store 7-tab widget submissions
-- Epic 3: Building Data Collection (7-Tab Widget)

CREATE TABLE IF NOT EXISTS public.case_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID UNIQUE NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,

  -- Tab data stored as JSONB for flexibility
  tab1_data JSONB DEFAULT '{}', -- General building info
  tab2_data JSONB DEFAULT '{}', -- Construction details
  tab3_data JSONB DEFAULT '{}', -- Heating system
  tab4_data JSONB DEFAULT '{}', -- Ventilation
  tab5_data JSONB DEFAULT '{}', -- Energy efficiency
  tab6_data JSONB DEFAULT '{}', -- Additional notes
  tab7_file_ids TEXT[] DEFAULT '{}', -- Array of uploaded file IDs

  -- Expert metadata (when filled by expert)
  filled_by_expert_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  filled_by_expert_name TEXT,

  -- Timestamps
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.case_data ENABLE ROW LEVEL SECURITY;

-- Create trigger for updated_at
CREATE TRIGGER set_case_data_updated_at
  BEFORE UPDATE ON public.case_data
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS case_data_case_id_idx ON public.case_data(case_id);

-- RLS Policies (simplified for MVP - all authenticated users can access)
CREATE POLICY "Authenticated users can read case data"
  ON public.case_data
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert case data"
  ON public.case_data
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update case data"
  ON public.case_data
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Add comment
COMMENT ON TABLE public.case_data IS '7-tab widget data for Energieausweis building information';
