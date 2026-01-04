/**
 * Setup Test Users Script
 *
 * Creates test users with proper authentication using Supabase Admin API
 * Run with: npx tsx scripts/setup-test-users.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

// Create admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

type UserRole = 'engineer' | 'customer' | 'expert'

interface TestUser {
  email: string
  password: string
  role: UserRole
  fullName: string
}

const testUsers: TestUser[] = [
  {
    email: 'engineer@test.com',
    password: 'password123',
    role: 'engineer',
    fullName: 'Test Engineer'
  },
  {
    email: 'alice@customer.com',
    password: 'password123',
    role: 'customer',
    fullName: 'Alice Johnson'
  },
  {
    email: 'bob@customer.com',
    password: 'password123',
    role: 'customer',
    fullName: 'Bob Smith'
  },
  {
    email: 'carol@customer.com',
    password: 'password123',
    role: 'customer',
    fullName: 'Carol Williams'
  }
]

async function createTestUser(user: TestUser) {
  console.log(`Creating user: ${user.email}...`)

  // Create auth user using Admin API
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: user.email,
    password: user.password,
    email_confirm: true, // Auto-confirm email
    user_metadata: {
      full_name: user.fullName
    }
  })

  if (authError) {
    console.error(`  ❌ Failed to create auth user: ${authError.message}`)
    return false
  }

  console.log(`  ✅ Auth user created: ${authData.user.id}`)

  // Update profile with role and full name
  const { error: profileError } = await supabase
    .from('profiles')
    .update({
      role: user.role,
      full_name: user.fullName
    })
    .eq('id', authData.user.id)

  if (profileError) {
    console.error(`  ❌ Failed to update profile: ${profileError.message}`)
    return false
  }

  console.log(`  ✅ Profile updated: role=${user.role}, name=${user.fullName}`)
  return true
}

async function main() {
  console.log('🚀 Setting up test users...\n')

  let successCount = 0
  let failCount = 0

  for (const user of testUsers) {
    const success = await createTestUser(user)
    if (success) {
      successCount++
    } else {
      failCount++
    }
    console.log('')
  }

  console.log('📊 Summary:')
  console.log(`  ✅ Successful: ${successCount}`)
  console.log(`  ❌ Failed: ${failCount}`)

  if (failCount === 0) {
    console.log('\n✨ All test users created successfully!')
    console.log('\nTest Credentials:')
    console.log('  Engineer: engineer@test.com / password123')
    console.log('  Customers: alice@customer.com, bob@customer.com, carol@customer.com')
    console.log('  Password: password123 (all users)')
  }

  process.exit(failCount > 0 ? 1 : 0)
}

main()
