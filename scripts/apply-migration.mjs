import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import * as dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load .env.local
dotenv.config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const migrationPath = process.argv[2]
if (!migrationPath) {
  console.error('Usage: node scripts/apply-migration.mjs <migration-file>')
  console.error('Example: node scripts/apply-migration.mjs supabase/migrations/20260103000001_create_profiles_table.sql')
  process.exit(1)
}

console.log('📦 Applying migration:', migrationPath)

try {
  const sql = readFileSync(migrationPath, 'utf-8')

  // Split by semicolons and execute each statement
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'))

  for (const statement of statements) {
    if (statement) {
      const { error } = await supabase.rpc('exec_sql', { sql_query: statement + ';' })

      if (error) {
        // Try direct query if RPC doesn't exist
        const { error: queryError } = await supabase.from('_sql').select('*').limit(0)

        console.log('⚠️  Using direct SQL execution...')
        // This requires manual execution in Supabase SQL Editor
        console.log('\n📋 Please execute this SQL in Supabase SQL Editor:')
        console.log('\n' + sql + '\n')
        process.exit(0)
      }
    }
  }

  console.log('✅ Migration applied successfully!')
} catch (error) {
  console.error('❌ Migration failed:', error.message)
  console.log('\n📋 Please execute this SQL in Supabase SQL Editor:')
  const sql = readFileSync(migrationPath, 'utf-8')
  console.log('\n' + sql + '\n')
  process.exit(1)
}
