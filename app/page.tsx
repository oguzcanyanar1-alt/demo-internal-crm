'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function Home() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }
  }, [user, loading, router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="animate-pulse">
        <h1 className="text-4xl font-bold">Bauexperts CRM</h1>
        <p className="mt-4 text-lg text-muted-foreground text-center">
          Loading...
        </p>
      </div>
    </main>
  )
}
