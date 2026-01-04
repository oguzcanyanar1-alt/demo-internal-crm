'use client'

import { useParams, useRouter } from 'next/navigation'
import { useCase } from '@/lib/hooks/useCases'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StatusBadge } from '@/components/features/StatusBadge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { blockCase, completeCase, submitBuildingData, assignExpert } from '@/app/actions/cases'
import { BuildingDataWidget } from '@/components/features/BuildingDataWidget'
import { ActivityTimeline } from '@/components/features/ActivityTimeline'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'

export default function CaseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { role } = useAuth()
  const { toast } = useToast()
  const caseId = params.id as string
  const { data: caseData, isLoading, error, refetch } = useCase(caseId)

  // Fetch case_data for the widget
  const { data: caseDataWidget, refetch: refetchCaseData } = useQuery({
    queryKey: ['case-data', caseId],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('case_data')
        .select('*')
        .eq('case_id', caseId)
        .maybeSingle()

      if (error) throw error
      return data
    },
    enabled: !!caseId,
  })

  // Fetch list of experts for assignment (engineers only)
  const { data: experts } = useQuery({
    queryKey: ['experts'],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name')
        .eq('role', 'expert')
        .order('email')

      if (error) throw error
      return data
    },
    enabled: role === 'engineer',
  })

  // Dialog states
  const [blockDialogOpen, setBlockDialogOpen] = useState(false)
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false)
  const [assignExpertDialogOpen, setAssignExpertDialogOpen] = useState(false)
  const [blockingMessage, setBlockingMessage] = useState('')
  const [selectedExpertId, setSelectedExpertId] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (error) {
      // RLS denied or case not found
      router.push('/dashboard')
    }
  }, [error, router])

  // Handler for blocking case
  const handleBlockCase = async () => {
    if (blockingMessage.trim().length < 10) {
      toast({
        title: 'Invalid message',
        description: 'Blocking message must be at least 10 characters',
        variant: 'destructive',
      })
      return
    }

    startTransition(async () => {
      const result = await blockCase(caseId, blockingMessage)

      if (result.error) {
        toast({
          title: 'Failed to Block Case',
          description: result.error,
          variant: 'destructive',
        })
      } else {
        toast({
          title: '🚫 Case Blocked',
          description: `Case ${caseData.case_number} has been blocked. Customer will be notified to make corrections.`,
        })
        setBlockDialogOpen(false)
        setBlockingMessage('')
        await refetch()
      }
    })
  }

  // Handler for completing case
  const handleCompleteCase = async () => {
    startTransition(async () => {
      const result = await completeCase(caseId)

      if (result.error) {
        toast({
          title: 'Failed to Complete Case',
          description: result.error,
          variant: 'destructive',
        })
      } else {
        toast({
          title: '✅ Case Completed',
          description: `Case ${caseData.case_number} has been completed successfully. Customer can now download their certificate.`,
        })
        setCompleteDialogOpen(false)
        await refetch()
      }
    })
  }

  // Handler for submitting building data
  const handleSubmitBuildingData = async (widgetData: any) => {
    const result = await submitBuildingData(caseId, widgetData)

    if (result.error) {
      throw new Error(result.error)
    }

    await refetch()
    await refetchCaseData()
  }

  // Handler for assigning expert
  const handleAssignExpert = async () => {
    if (!selectedExpertId) {
      toast({
        title: 'No expert selected',
        description: 'Please select an expert to assign',
        variant: 'destructive',
      })
      return
    }

    startTransition(async () => {
      const result = await assignExpert(caseId, selectedExpertId)

      if (result.error) {
        toast({
          title: 'Failed to Assign Expert',
          description: result.error,
          variant: 'destructive',
        })
      } else {
        const expert = experts?.find(e => e.id === selectedExpertId)
        toast({
          title: '👤 Expert Assigned',
          description: `${expert?.full_name || expert?.email} has been assigned to case ${caseData.case_number}`,
        })
        setAssignExpertDialogOpen(false)
        setSelectedExpertId('')
        await refetch()
      }
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-muted/50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !caseData) {
    return (
      <div className="min-h-screen bg-muted/50 p-8">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardContent className="py-16">
              <div className="text-center space-y-4">
                <p className="text-lg font-semibold">Case not found</p>
                <p className="text-muted-foreground">
                  You don't have permission to view this case or it doesn't exist.
                </p>
                <Link href="/dashboard">
                  <Button>Back to Dashboard</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold">{caseData.case_number}</h1>
              <StatusBadge status={caseData.status} />
            </div>
            <p className="text-muted-foreground mt-1">
              Created: {new Date(caseData.created_at).toLocaleString()}
              {' • '}
              Updated: {new Date(caseData.updated_at).toLocaleString()}
            </p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>

        {/* Blocking Message (if blocked) */}
        {caseData.status === 'blocked' && caseData.engineer_blocking_message && (
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Case Blocked - Action Required</CardTitle>
              <CardDescription>
                An engineer has requested changes to the submitted data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{caseData.engineer_blocking_message}</p>
            </CardContent>
          </Card>
        )}

        {/* Building Data Widget */}
        {caseData.status !== 'completed' && (
          <BuildingDataWidget
            caseId={caseId}
            initialData={caseDataWidget || undefined}
            onSubmit={handleSubmitBuildingData}
            isReadOnly={
              role === 'engineer' || caseData.status === 'data_submitted'
            }
            allowFileUpload={
              role !== 'engineer' &&
              (caseData.status === 'waiting_for_data' || caseData.status === 'blocked')
            }
          />
        )}

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="text-sm">{caseData.customer?.email || 'N/A'}</p>
              </div>
              {caseData.customer?.full_name && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Name</p>
                  <p className="text-sm">{caseData.customer.full_name}</p>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customer ID</p>
                <p className="text-sm font-mono text-xs">{caseData.customer_id}</p>
              </div>
            </CardContent>
          </Card>

          {/* Responsible Actor */}
          <Card>
            <CardHeader>
              <CardTitle>Data Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data to be filled by</p>
                <p className="text-sm font-semibold capitalize">
                  {caseData.responsible_actor}
                </p>
              </div>

              {caseData.assigned_expert_id && caseData.expert && (
                <>
                  <div className="border-t pt-3">
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Assigned Expert
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-sm">{caseData.expert.email}</p>
                  </div>
                  {caseData.expert.full_name && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Name</p>
                      <p className="text-sm">{caseData.expert.full_name}</p>
                    </div>
                  )}
                </>
              )}

              {caseData.responsible_actor === 'expert' && !caseData.assigned_expert_id && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    No expert assigned yet
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Case Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Case Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-sm text-muted-foreground">
                  {new Date(caseData.created_at).toLocaleString()}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Case Created</p>
                  <p className="text-sm text-muted-foreground">
                    Status: Waiting for data
                  </p>
                </div>
              </div>

              {caseData.completed_at && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 text-sm text-muted-foreground">
                    {new Date(caseData.completed_at).toLocaleString()}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Case Completed</p>
                    <p className="text-sm text-muted-foreground">
                      Final certificate uploaded
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Engineer Actions (only visible to engineers) */}
        {role === 'engineer' && (
          <Card>
            <CardHeader>
              <CardTitle>Engineer Actions</CardTitle>
              <CardDescription>
                Actions available based on current case status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Expert Assignment Section */}
                {caseData.responsible_actor === 'expert' && (
                  <div className="pb-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Expert Assignment</p>
                        {caseData.assigned_expert_id ? (
                          <p className="text-sm text-muted-foreground mt-1">
                            Currently assigned to: {caseData.expert?.full_name || caseData.expert?.email}
                          </p>
                        ) : (
                          <p className="text-sm text-muted-foreground mt-1">
                            No expert assigned yet
                          </p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setAssignExpertDialogOpen(true)}
                        disabled={isPending}
                      >
                        {caseData.assigned_expert_id ? 'Reassign Expert' : 'Assign Expert'}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Case Review Actions */}
                <div className="flex gap-4">
                  {caseData.status === 'data_submitted' && (
                    <>
                      <Button
                        variant="destructive"
                        onClick={() => setBlockDialogOpen(true)}
                        disabled={isPending}
                      >
                        Block Case
                      </Button>
                      <Button
                        onClick={() => setCompleteDialogOpen(true)}
                        disabled={isPending}
                      >
                        Complete Case
                      </Button>
                    </>
                  )}
                  {caseData.status === 'waiting_for_data' && (
                    <p className="text-sm text-muted-foreground">
                      Waiting for data submission from {caseData.responsible_actor}
                    </p>
                  )}
                  {caseData.status === 'blocked' && (
                    <p className="text-sm text-muted-foreground">
                      Case is blocked. Waiting for corrections from {caseData.responsible_actor}
                    </p>
                  )}
                  {caseData.status === 'completed' && (
                    <p className="text-sm text-muted-foreground">
                      Case is completed. No further actions required.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Activity Timeline */}
        <ActivityTimeline caseId={caseId} />
      </div>

      {/* Block Case Dialog */}
      <Dialog open={blockDialogOpen} onOpenChange={setBlockDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Block Case - Provide Feedback</DialogTitle>
            <DialogDescription>
              Provide a detailed message explaining what data needs to be corrected.
              This will be sent to the customer or expert.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="blocking-message">Blocking Message</Label>
              <Textarea
                id="blocking-message"
                placeholder="Enter the reason for blocking this case and what needs to be fixed..."
                value={blockingMessage}
                onChange={(e) => setBlockingMessage(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Minimum 10 characters ({blockingMessage.length}/10)
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setBlockDialogOpen(false)
                setBlockingMessage('')
              }}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleBlockCase}
              disabled={isPending || blockingMessage.trim().length < 10}
            >
              {isPending ? 'Blocking...' : 'Block Case'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Complete Case Dialog */}
      <Dialog open={completeDialogOpen} onOpenChange={setCompleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Case</DialogTitle>
            <DialogDescription>
              Mark this case as completed. The customer will be notified.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Are you sure you want to mark case <strong>{caseData.case_number}</strong> as completed?
              This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setCompleteDialogOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCompleteCase}
              disabled={isPending}
            >
              {isPending ? 'Completing...' : 'Complete Case'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Assign Expert Dialog */}
      <Dialog open={assignExpertDialogOpen} onOpenChange={setAssignExpertDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Expert to Case</DialogTitle>
            <DialogDescription>
              Select an expert to assign to this case. The expert will be responsible for filling building data.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="expert-select">Select Expert</Label>
              <Select
                value={selectedExpertId}
                onValueChange={setSelectedExpertId}
              >
                <SelectTrigger id="expert-select">
                  <SelectValue placeholder="Choose an expert..." />
                </SelectTrigger>
                <SelectContent>
                  {experts?.map((expert) => (
                    <SelectItem key={expert.id} value={expert.id}>
                      {expert.full_name || expert.email}
                    </SelectItem>
                  ))}
                  {(!experts || experts.length === 0) && (
                    <SelectItem value="no-experts" disabled>
                      No experts available
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setAssignExpertDialogOpen(false)
                setSelectedExpertId('')
              }}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAssignExpert}
              disabled={isPending || !selectedExpertId}
            >
              {isPending ? 'Assigning...' : 'Assign Expert'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
