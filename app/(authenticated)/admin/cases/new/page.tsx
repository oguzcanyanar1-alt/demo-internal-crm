'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCreateCase } from '@/lib/hooks/useCases'
import { useAuth } from '@/lib/auth-context'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ResponsibleActor } from '@/types/database'

export default function NewCasePage() {
  const router = useRouter()
  const { role, loading: authLoading } = useAuth()
  const [customers, setCustomers] = useState<any[]>([])
  const [customerId, setCustomerId] = useState('')
  const [responsibleActor, setResponsibleActor] = useState<ResponsibleActor>('customer')
  const [error, setError] = useState<string | null>(null)
  const createCase = useCreateCase()
  const supabase = createClient()

  // Fetch customers
  useEffect(() => {
    async function fetchCustomers() {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name')
        .eq('role', 'customer')
        .order('email')

      if (error) {
        console.error('Error fetching customers:', error)
      } else {
        setCustomers(data || [])
      }
    }

    fetchCustomers()
  }, [supabase])

  // Redirect if not engineer
  useEffect(() => {
    if (!authLoading && role !== 'engineer') {
      router.push('/dashboard')
    }
  }, [role, authLoading, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!customerId) {
      setError('Please select a customer')
      return
    }

    try {
      const newCase = await createCase.mutateAsync({
        customerId,
        responsibleActor,
      })

      router.push(`/cases/${newCase.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create case')
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (role !== 'engineer') {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Create New Case</h1>
          <p className="text-muted-foreground">
            Create a new Energieausweis case for a customer
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Case Details</CardTitle>
            <CardDescription>
              Select the customer and who will fill the building data
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="customer">Customer *</Label>
                <select
                  id="customer"
                  className="w-full px-3 py-2 border rounded-md"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  required
                >
                  <option value="">Select a customer...</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.full_name || customer.email} ({customer.email})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsible">Who will fill the data? *</Label>
                <select
                  id="responsible"
                  className="w-full px-3 py-2 border rounded-md"
                  value={responsibleActor}
                  onChange={(e) => setResponsibleActor(e.target.value as ResponsibleActor)}
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="expert">Expert (to be assigned)</option>
                </select>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={createCase.isPending}>
                  {createCase.isPending ? 'Creating...' : 'Create Case'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  )
}
