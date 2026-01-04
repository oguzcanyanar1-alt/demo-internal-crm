import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env.local
dotenv.config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Verifying Supabase connection...\n')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables')
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '✗')
  process.exit(1)
}

console.log('✓ Environment variables loaded')
console.log('  URL:', supabaseUrl)
console.log('  Key:', supabaseAnonKey.substring(0, 20) + '...\n')

try {
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Test connection with a simple query
  const { data, error } = await supabase.from('_test').select('*').limit(1)

  // Connection works even if table doesn't exist
  if (error && error.code === '42P01') {
    console.log('✅ Supabase connection successful!')
    console.log('   (No tables found - expected for new project)\n')
  } else if (error) {
    console.log('⚠️  Connected but got error:', error.message)
  } else {
    console.log('✅ Supabase connection successful!')
    console.log('   Tables exist and accessible\n')
  }

  process.exit(0)
} catch (error) {
  console.error('❌ Connection failed:', error.message)
  process.exit(1)
}
