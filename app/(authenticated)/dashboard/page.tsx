'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { signOut } from '@/lib/supabase/auth'
import { useCases, useMyCases, useMyAssignedCases } from '@/lib/hooks/useCases'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StatusBadge } from '@/components/features/StatusBadge'
import Link from 'next/link'
import type { CaseStatus } from '@/types/database'

export default function DashboardPage() {
  const { user, role, loading } = useAuth()
  const router = useRouter()
  const [statusFilter, setStatusFilter] = useState<CaseStatus | undefined>(undefined)

  // Fetch data based on role
  const engineerCases = useCases(statusFilter)
  const customerCases = useMyCases()
  const expertCases = useMyAssignedCases()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  async function handleSignOut() {
    await signOut()
    router.push('/login')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  // Engineer view
  if (role === 'engineer') {
    const { data: cases, isLoading } = engineerCases

    return (
      <div className="min-h-screen bg-muted/50 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Engineer Dashboard</h1>
              <p className="text-muted-foreground">Shared case pool</p>
            </div>
            <div className="flex gap-4">
              <Link href="/admin/cases/new">
                <Button>Create New Case</Button>
              </Link>
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={statusFilter === undefined ? 'default' : 'outline'}
              onClick={() => setStatusFilter(undefined)}
            >
              All
            </Button>
            <Button
              variant={statusFilter === 'waiting_for_data' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('waiting_for_data')}
            >
              Waiting
            </Button>
            <Button
              variant={statusFilter === 'data_submitted' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('data_submitted')}
            >
              Submitted
            </Button>
            <Button
              variant={statusFilter === 'blocked' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('blocked')}
            >
              Blocked
            </Button>
            <Button
              variant={statusFilter === 'completed' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('completed')}
            >
              Completed
            </Button>
          </div>

          {isLoading ? (
            <p>Loading cases...</p>
          ) : !cases || cases.length === 0 ? (
            <Card>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">No cases found</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {cases.map((caseItem: any) => (
                <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                  <Card className="hover:bg-muted/50 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{caseItem.case_number}</CardTitle>
                          <CardDescription>
                            Customer: {caseItem.customer?.email}
                            {' • '}
                            Responsible: {caseItem.responsible_actor}
                          </CardDescription>
                        </div>
                        <StatusBadge status={caseItem.status} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Created: {new Date(caseItem.created_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Customer view
  if (role === 'customer') {
    const { data: cases, isLoading } = customerCases

    return (
      <div className="min-h-screen bg-muted/50 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Cases</h1>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>

          {isLoading ? (
            <p>Loading cases...</p>
          ) : !cases || cases.length === 0 ? (
            <Card>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">You have no cases yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {cases.map((caseItem: any) => (
                <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                  <Card className="hover:bg-muted/50 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle>{caseItem.case_number}</CardTitle>
                        <StatusBadge status={caseItem.status} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Created: {new Date(caseItem.created_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Expert view
  if (role === 'expert') {
    const { data: cases, isLoading } = expertCases

    return (
      <div className="min-h-screen bg-muted/50 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Assigned Cases</h1>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>

          {isLoading ? (
            <p>Loading cases...</p>
          ) : !cases || cases.length === 0 ? (
            <Card>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">No cases assigned to you yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {cases.map((caseItem: any) => (
                <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                  <Card className="hover:bg-muted/50 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{caseItem.case_number}</CardTitle>
                          <CardDescription>
                            Customer: {caseItem.customer?.email}
                          </CardDescription>
                        </div>
                        <StatusBadge status={caseItem.status} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Created: {new Date(caseItem.created_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Fallback for unknown/null roles
  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
        <Card className="border-yellow-500">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              You are logged in as {user.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Role: <span className="font-semibold">{role || 'Unknown'}</span>
              </p>
              {!role && (
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">
                  Your user profile may not be set up correctly. Please contact an administrator.
                </p>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              User ID: {user.id}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
