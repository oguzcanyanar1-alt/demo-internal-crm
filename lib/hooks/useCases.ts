import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import { createCase } from '@/app/actions/cases'
import type { ResponsibleActor, CaseStatus } from '@/types/database'

/**
 * Fetch all cases (engineers only)
 */
export function useCases(statusFilter?: CaseStatus) {
  const supabase = createClient()

  return useQuery({
    queryKey: ['cases', statusFilter],
    queryFn: async () => {
      let query = supabase
        .from('cases')
        .select('*, customer:profiles!customer_id(email, full_name)')
        .order('created_at', { ascending: false })

      if (statusFilter) {
        query = query.eq('status', statusFilter)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    },
  })
}

/**
 * Fetch customer's own cases
 */
export function useMyCases() {
  const supabase = createClient()

  return useQuery({
    queryKey: ['my-cases'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) throw new Error('Not authenticated')

      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .eq('customer_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
  })
}

/**
 * Fetch expert's assigned cases
 */
export function useMyAssignedCases() {
  const supabase = createClient()

  return useQuery({
    queryKey: ['my-assigned-cases'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) throw new Error('Not authenticated')

      const { data, error } = await supabase
        .from('cases')
        .select('*, customer:profiles!customer_id(email, full_name)')
        .eq('assigned_expert_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
  })
}

/**
 * Fetch single case by ID
 */
export function useCase(caseId: string) {
  const supabase = createClient()

  return useQuery({
    queryKey: ['cases', caseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cases')
        .select(`
          *,
          customer:profiles!customer_id(id, email, full_name),
          expert:profiles!assigned_expert_id(id, email, full_name)
        `)
        .eq('id', caseId)
        .single()

      if (error) {
        // RLS will return error if user doesn't have access
        throw new Error(error.message)
      }

      return data
    },
    enabled: !!caseId,
  })
}

/**
 * Create new case mutation
 */
export function useCreateCase() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      customerId,
      responsibleActor,
    }: {
      customerId: string
      responsibleActor: ResponsibleActor
    }) => {
      const result = await createCase(customerId, responsibleActor)

      if (result.error) {
        throw new Error(result.error)
      }

      return result.data
    },
    onSuccess: () => {
      // Invalidate cases queries to refetch
      queryClient.invalidateQueries({ queryKey: ['cases'] })
      queryClient.invalidateQueries({ queryKey: ['my-cases'] })
    },
  })
}
