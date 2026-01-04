import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export type AuthError = {
  message: string
  code?: string
}

export type AuthResult<T = void> = {
  data: T | null
  error: AuthError | null
}

/**
 * Sign up a new user with email and password
 */
export async function signUp(
  email: string,
  password: string
): Promise<AuthResult<User>> {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return {
      data: null,
      error: { message: error.message, code: error.code },
    }
  }

  return { data: data.user, error: null }
}

/**
 * Sign in an existing user with email and password
 */
export async function signIn(
  email: string,
  password: string
): Promise<AuthResult<User>> {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      data: null,
      error: { message: error.message, code: error.code },
    }
  }

  return { data: data.user, error: null }
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<AuthResult> {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    return {
      data: null,
      error: { message: error.message, code: error.code },
    }
  }

  return { data: null, error: null }
}
