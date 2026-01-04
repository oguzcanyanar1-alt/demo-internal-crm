import { createClient } from '@supabase/supabase-js'

export async function testConnection() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      success: false,
      error: 'Missing environment variables',
    }
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Simple health check
    const { error } = await supabase.from('_health').select('*').limit(1)

    // If the table doesn't exist, that's fine - connection works
    if (error && !error.message.includes('does not exist')) {
      return {
        success: false,
        error: error.message,
      }
    }

    return {
      success: true,
      url: supabaseUrl,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
