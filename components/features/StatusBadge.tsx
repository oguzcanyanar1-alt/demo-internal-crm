import { Badge } from '@/components/ui/badge'
import type { CaseStatus } from '@/types/database'

type StatusBadgeProps = {
  status: CaseStatus
}

const statusConfig: Record<CaseStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; className: string }> = {
  waiting_for_data: {
    label: 'Waiting for Data',
    variant: 'default',
    className: 'bg-blue-500 hover:bg-blue-600',
  },
  data_submitted: {
    label: 'Data Submitted',
    variant: 'default',
    className: 'bg-yellow-500 hover:bg-yellow-600',
  },
  blocked: {
    label: 'Blocked',
    variant: 'destructive',
    className: 'bg-red-500 hover:bg-red-600',
  },
  completed: {
    label: 'Completed',
    variant: 'default',
    className: 'bg-green-500 hover:bg-green-600',
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  )
}
