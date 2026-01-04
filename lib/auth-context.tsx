'use client'

import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import type { UserRole } from '@/types/database'

type AuthContextType = {
  user: User | null
  role: UserRole | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)

  // Memoize supabase client to prevent re-renders
  const supabase = useMemo(() => createClient(), [])

  useEffect(() => {
    // Get initial session and profile
    async function getSessionAndProfile() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        const currentUser = session?.user ?? null
        setUser(currentUser)

        if (currentUser) {
          // Fetch user profile to get role
          try {
            console.log('[AuthContext] Fetching profile for user:', currentUser.id)
            const { data: profile, error, status, statusText } = await supabase
              .from('profiles')
              .select('role')
              .eq('id', currentUser.id)
              .maybeSingle()

            console.log('[AuthContext] Profile query result:', { profile, error, status, statusText })

            if (error) {
              console.error('[AuthContext] Profile fetch error:', {
                error,
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
              })
              setRole(null)
            } else if (profile) {
              console.log('[AuthContext] Profile loaded successfully:', profile)
              setRole(profile.role)
            } else {
              console.warn('[AuthContext] No profile found for user:', currentUser.id)
              setRole(null)
            }
          } catch (profileError) {
            console.error('[AuthContext] Profile fetch exception:', profileError)
            setRole(null)
          }
        } else {
          setRole(null)
        }
      } catch (error) {
        console.error('Session fetch error:', error)
        setUser(null)
        setRole(null)
      } finally {
        setLoading(false)
      }
    }

    getSessionAndProfile()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      try {
        const currentUser = session?.user ?? null
        setUser(currentUser)

        if (currentUser) {
          // Fetch updated profile
          try {
            console.log('[AuthContext] Auth change - Fetching profile for user:', currentUser.id)
            const { data: profile, error, status, statusText } = await supabase
              .from('profiles')
              .select('role')
              .eq('id', currentUser.id)
              .maybeSingle()

            console.log('[AuthContext] Auth change - Profile query result:', { profile, error, status, statusText })

            if (error) {
              console.error('[AuthContext] Profile fetch error on auth change:', {
                error,
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
              })
              setRole(null)
            } else if (profile) {
              console.log('[AuthContext] Auth change - Profile loaded successfully:', profile)
              setRole(profile.role)
            } else {
              console.warn('[AuthContext] Auth change - No profile found for user:', currentUser.id)
              setRole(null)
            }
          } catch (profileError) {
            console.error('[AuthContext] Profile fetch exception on auth change:', profileError)
            setRole(null)
          }
        } else {
          setRole(null)
        }
      } catch (error) {
        console.error('Auth state change error:', error)
        setUser(null)
        setRole(null)
      } finally {
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
