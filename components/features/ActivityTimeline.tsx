'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import type { CaseActivity } from '@/types/database'
import {
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Clock,
  RotateCcw
} from 'lucide-react'

interface ActivityTimelineProps {
  caseId: string
}

export function ActivityTimeline({ caseId }: ActivityTimelineProps) {
  const [activities, setActivities] = useState<CaseActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadActivities = async () => {
      const supabase = createClient()

      const { data, error } = await supabase
        .from('case_activities')
        .select('*')
        .eq('case_id', caseId)
        .order('created_at', { ascending: false })

      if (!error && data) {
        setActivities(data as CaseActivity[])
      }

      setIsLoading(false)
    }

    loadActivities()
  }, [caseId])

  const getActivityIcon = (activityType: string) => {
    switch (activityType) {
      case 'case_created':
        return <FileText className="h-5 w-5 text-blue-500" />
      case 'data_submitted':
        return <Upload className="h-5 w-5 text-green-500" />
      case 'case_blocked':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case 'case_completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case 'case_reopened':
        return <RotateCcw className="h-5 w-5 text-orange-500" />
      case 'file_uploaded':
        return <Upload className="h-5 w-5 text-purple-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
      if (diffInMinutes < 1) return 'Just now'
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
    }

    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    }

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>Loading activities...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
        <CardDescription>
          Complete history of all actions on this case
        </CardDescription>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No activity yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex gap-4 relative"
              >
                {/* Timeline line */}
                {index < activities.length - 1 && (
                  <div className="absolute left-[18px] top-8 bottom-[-16px] w-[2px] bg-border" />
                )}

                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center relative z-10">
                  {getActivityIcon(activity.activity_type)}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        by {activity.actor_name} ({activity.actor_role})
                      </p>

                      {/* Show blocking message if present */}
                      {activity.activity_type === 'case_blocked' &&
                       activity.metadata &&
                       typeof activity.metadata === 'object' &&
                       'blocking_message' in activity.metadata && (
                        <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs border border-red-200 dark:border-red-800">
                          <p className="font-medium text-red-800 dark:text-red-200">
                            Engineer feedback:
                          </p>
                          <p className="text-red-700 dark:text-red-300 mt-1">
                            {String(activity.metadata.blocking_message)}
                          </p>
                        </div>
                      )}
                    </div>

                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatTimestamp(activity.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
