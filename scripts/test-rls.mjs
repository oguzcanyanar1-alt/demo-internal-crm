import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔒 Testing RLS Policies\n')

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test 1: Attempt to view all profiles without auth (should fail)
console.log('Test 1: Unauthenticated user viewing profiles...')
const { data: allProfiles, error: allError } = await supabase
  .from('profiles')
  .select('*')

if (allError || !allProfiles || allProfiles.length === 0) {
  console.log('✅ PASS: Cannot view profiles without authentication\n')
} else {
  console.log('❌ FAIL: Unauthenticated user can see profiles\n')
}

console.log('Note: Full RLS testing requires authenticated sessions.')
console.log('Manual test steps:')
console.log('1. Create User A and User B via registration')
console.log('2. Login as User A')
console.log('3. Try to fetch User B\'s profile')
console.log('4. Should return empty result (RLS blocks access)\n')
