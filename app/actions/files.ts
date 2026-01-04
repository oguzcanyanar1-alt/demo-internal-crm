'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

type ActionResult<T = unknown> = {
  data?: T
  error?: string
}

/**
 * Upload files to Supabase Storage for a case
 * Epic 5: File Upload & PDF Generation
 */
export async function uploadCaseFiles(
  caseId: string,
  formData: FormData
): Promise<ActionResult<{ fileIds: string[] }>> {
  try {
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { error: 'Unauthorized - please login' }
    }

    // Verify user has access to this case
    const { data: caseData, error: caseError } = await supabase
      .from('cases')
      .select('customer_id, assigned_expert_id')
      .eq('id', caseId)
      .single()

    if (caseError || !caseData) {
      return { error: 'Case not found or access denied' }
    }

    // Check if user has permission (customer, assigned expert, or engineer)
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const hasAccess =
      caseData.customer_id === user.id ||
      caseData.assigned_expert_id === user.id ||
      profile?.role === 'engineer'

    if (!hasAccess) {
      return { error: 'You do not have permission to upload files to this case' }
    }

    // Upload files
    const files = formData.getAll('files') as File[]
    const uploadedFileIds: string[] = []

    for (const file of files) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        return { error: `File ${file.name} exceeds 10MB limit` }
      }

      // Generate unique filename with timestamp
      const timestamp = Date.now()
      const fileName = `${timestamp}-${file.name}`
      const filePath = `cases/${caseId}/${fileName}`

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('case-files')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Error uploading file:', uploadError)
        return { error: `Failed to upload ${file.name}` }
      }

      uploadedFileIds.push(filePath)
    }

    // Update case_data with new file IDs
    const { data: existingData } = await supabase
      .from('case_data')
      .select('tab7_file_ids')
      .eq('case_id', caseId)
      .maybeSingle()

    const currentFileIds = existingData?.tab7_file_ids || []
    const updatedFileIds = [...currentFileIds, ...uploadedFileIds]

    if (existingData) {
      // Update existing record
      const { error: updateError } = await supabase
        .from('case_data')
        .update({
          tab7_file_ids: updatedFileIds,
          updated_at: new Date().toISOString()
        })
        .eq('case_id', caseId)

      if (updateError) {
        console.error('Error updating case_data:', updateError)
        return { error: 'Failed to update case data with file references' }
      }
    } else {
      // Insert new record
      const { error: insertError } = await supabase
        .from('case_data')
        .insert({
          case_id: caseId,
          tab7_file_ids: uploadedFileIds
        })

      if (insertError) {
        console.error('Error inserting case_data:', insertError)
        return { error: 'Failed to save file references' }
      }
    }

    // Revalidate case detail page
    revalidatePath(`/cases/${caseId}`)

    return { data: { fileIds: uploadedFileIds } }
  } catch (error) {
    console.error('Unexpected error in uploadCaseFiles:', error)
    return { error: 'An unexpected error occurred during file upload' }
  }
}

/**
 * Delete a file from Supabase Storage
 */
export async function deleteCaseFile(
  caseId: string,
  filePath: string
): Promise<ActionResult> {
  try {
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { error: 'Unauthorized - please login' }
    }

    // Verify user has access to this case
    const { data: caseData, error: caseError } = await supabase
      .from('cases')
      .select('customer_id, assigned_expert_id')
      .eq('id', caseId)
      .single()

    if (caseError || !caseData) {
      return { error: 'Case not found or access denied' }
    }

    // Check if user has permission
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const hasAccess =
      caseData.customer_id === user.id ||
      caseData.assigned_expert_id === user.id ||
      profile?.role === 'engineer'

    if (!hasAccess) {
      return { error: 'You do not have permission to delete files from this case' }
    }

    // Delete from storage
    const { error: deleteError } = await supabase.storage
      .from('case-files')
      .remove([filePath])

    if (deleteError) {
      console.error('Error deleting file:', deleteError)
      return { error: 'Failed to delete file' }
    }

    // Update case_data to remove file ID
    const { data: existingData } = await supabase
      .from('case_data')
      .select('tab7_file_ids')
      .eq('case_id', caseId)
      .maybeSingle()

    if (existingData) {
      const updatedFileIds = (existingData.tab7_file_ids || []).filter(
        (id: string) => id !== filePath
      )

      const { error: updateError } = await supabase
        .from('case_data')
        .update({
          tab7_file_ids: updatedFileIds,
          updated_at: new Date().toISOString()
        })
        .eq('case_id', caseId)

      if (updateError) {
        console.error('Error updating case_data:', updateError)
        return { error: 'File deleted but failed to update references' }
      }
    }

    // Revalidate case detail page
    revalidatePath(`/cases/${caseId}`)

    return { data: { success: true } }
  } catch (error) {
    console.error('Unexpected error in deleteCaseFile:', error)
    return { error: 'An unexpected error occurred during file deletion' }
  }
}

/**
 * Get signed URLs for case files
 */
export async function getCaseFileUrls(
  caseId: string
): Promise<ActionResult<Array<{ path: string; url: string; name: string }>>> {
  try {
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { error: 'Unauthorized - please login' }
    }

    // Get case_data with file IDs
    const { data: caseData, error: fetchError } = await supabase
      .from('case_data')
      .select('tab7_file_ids')
      .eq('case_id', caseId)
      .maybeSingle()

    if (fetchError) {
      console.error('Error fetching case_data:', fetchError)
      return { error: 'Failed to fetch file data' }
    }

    if (!caseData || !caseData.tab7_file_ids || caseData.tab7_file_ids.length === 0) {
      return { data: [] }
    }

    // Generate signed URLs for each file (1 hour expiration)
    const fileUrls = await Promise.all(
      caseData.tab7_file_ids.map(async (filePath: string) => {
        const { data, error } = await supabase.storage
          .from('case-files')
          .createSignedUrl(filePath, 3600) // 1 hour

        if (error) {
          console.error(`Error creating signed URL for ${filePath}:`, error)
          return null
        }

        // Extract filename from path
        const fileName = filePath.split('/').pop() || filePath

        return {
          path: filePath,
          url: data.signedUrl,
          name: fileName.replace(/^\d+-/, '') // Remove timestamp prefix
        }
      })
    )

    // Filter out any failed URL generations
    const validUrls = fileUrls.filter((url): url is { path: string; url: string; name: string } => url !== null)

    return { data: validUrls }
  } catch (error) {
    console.error('Unexpected error in getCaseFileUrls:', error)
    return { error: 'An unexpected error occurred while fetching file URLs' }
  }
}
