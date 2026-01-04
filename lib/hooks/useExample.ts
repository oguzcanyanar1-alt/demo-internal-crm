import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'

/**
 * Example query hook demonstrating TanStack Query pattern
 *
 * Usage:
 * const { data, isLoading, error } = useExample()
 *
 * This hook demonstrates:
 * - TanStack Query integration
 * - Supabase client usage
 * - Query key format: ['entity', ...params]
 * - Error handling
 */
export function useExample() {
  const supabase = createClient()

  return useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      // Example: fetch from Supabase
      // This will fail until we have actual tables
      const { data, error } = await supabase
        .from('_example')
        .select('*')
        .limit(1)

      if (error) {
        // Expected error until tables exist
        console.log('Example query - table not found (expected)')
        return null
      }

      return data
    },
    enabled: false, // Disabled until we have actual tables
  })
}
