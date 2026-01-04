-- RLS Policies for profiles table

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow profile reads" ON public.profiles;
DROP POLICY IF EXISTS "Engineers can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Authenticated users can read profiles" ON public.profiles;

-- Policy: All authenticated users can read profiles (MVP - avoid recursion)
-- In production, consider using JWT claims for role-based access
CREATE POLICY "Authenticated users can read profiles"
  ON public.profiles
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Users can update own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Policy: System can insert profiles (for trigger)
CREATE POLICY "System can insert profiles"
  ON public.profiles
  FOR INSERT
  WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
