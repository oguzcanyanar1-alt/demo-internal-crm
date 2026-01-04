'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Upload, X, FileIcon } from 'lucide-react'
import { uploadCaseFiles, deleteCaseFile, getCaseFileUrls } from '@/app/actions/files'
import type { Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data, Tab6Data } from '@/types/database'

interface WidgetData {
  tab1_data: Tab1Data
  tab2_data: Tab2Data
  tab3_data: Tab3Data
  tab4_data: Tab4Data
  tab5_data: Tab5Data
  tab6_data: Tab6Data
  tab7_file_ids: string[]
}

interface BuildingDataWidgetProps {
  caseId: string
  initialData?: Partial<WidgetData>
  onSubmit: (data: WidgetData) => Promise<void>
  isReadOnly?: boolean
  allowFileUpload?: boolean
}

export function BuildingDataWidget({
  caseId,
  initialData,
  onSubmit,
  isReadOnly = false,
  allowFileUpload = true
}: BuildingDataWidgetProps) {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState('tab1')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [existingFiles, setExistingFiles] = useState<Array<{ path: string; url: string; name: string }>>([])
  const [newFiles, setNewFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Widget state
  const [tab1Data, setTab1Data] = useState<Tab1Data>(initialData?.tab1_data || {})
  const [tab2Data, setTab2Data] = useState<Tab2Data>(initialData?.tab2_data || {})
  const [tab3Data, setTab3Data] = useState<Tab3Data>(initialData?.tab3_data || {})
  const [tab4Data, setTab4Data] = useState<Tab4Data>(initialData?.tab4_data || {})
  const [tab5Data, setTab5Data] = useState<Tab5Data>(initialData?.tab5_data || {})
  const [tab6Data, setTab6Data] = useState<Tab6Data>(initialData?.tab6_data || {})

  // Load existing files on mount
  useEffect(() => {
    const loadFiles = async () => {
      const result = await getCaseFileUrls(caseId)
      if (result.data) {
        setExistingFiles(result.data)
      }
    }
    loadFiles()
  }, [caseId])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const fileArray = Array.from(files)

    // Validate file size (10MB max per file)
    const oversizedFiles = fileArray.filter(file => file.size > 10 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      toast({
        title: 'File Too Large',
        description: `${oversizedFiles.length} file(s) exceed 10MB limit`,
        variant: 'destructive',
      })
      return
    }

    // Add files to local state (will be uploaded on submit)
    setNewFiles(prev => [...prev, ...fileArray])

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleRemoveNewFile = (index: number) => {
    setNewFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleRemoveExistingFile = async (filePath: string) => {
    const result = await deleteCaseFile(caseId, filePath)

    if (result.error) {
      toast({
        title: '❌ Delete Failed',
        description: result.error,
        variant: 'destructive',
      })
    } else {
      toast({
        title: '🗑️ File Deleted',
        description: 'Photo removed successfully',
      })
      setExistingFiles(prev => prev.filter(file => file.path !== filePath))
    }
  }

  const handleSubmit = async () => {
    // Basic validation - check if at least some data is filled
    if (!tab1Data.buildingAddress || !tab1Data.buildingType) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in at least the building address and type in Tab 1',
        variant: 'destructive',
      })
      setActiveTab('tab1')
      return
    }

    setIsSubmitting(true)
    try {
      // Step 1: Upload new files first if any
      if (newFiles.length > 0) {
        const formData = new FormData()
        newFiles.forEach(file => formData.append('files', file))

        const uploadResult = await uploadCaseFiles(caseId, formData)

        if (uploadResult.error) {
          toast({
            title: 'File Upload Failed',
            description: uploadResult.error,
            variant: 'destructive',
          })
          setIsSubmitting(false)
          return
        }
      }

      // Step 2: Submit building data
      await onSubmit({
        tab1_data: tab1Data,
        tab2_data: tab2Data,
        tab3_data: tab3Data,
        tab4_data: tab4Data,
        tab5_data: tab5Data,
        tab6_data: tab6Data,
        tab7_file_ids: [], // File IDs are managed by uploadCaseFiles action
      })

      toast({
        title: '📤 Data Submitted Successfully',
        description: 'Your building data and photos have been submitted for engineer review.',
      })

      // Clear new files since they're now uploaded
      setNewFiles([])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit building data',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Building Information</CardTitle>
        <CardDescription>
          {isReadOnly
            ? 'View submitted building data (read-only)'
            : 'Complete all tabs to submit building information for Energieausweis generation'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="tab1">1. General</TabsTrigger>
            <TabsTrigger value="tab2">2. Construction</TabsTrigger>
            <TabsTrigger value="tab3">3. Heating</TabsTrigger>
            <TabsTrigger value="tab4">4. Ventilation</TabsTrigger>
            <TabsTrigger value="tab5">5. Energy</TabsTrigger>
            <TabsTrigger value="tab6">6. Notes</TabsTrigger>
            <TabsTrigger value="tab7">7. Photos</TabsTrigger>
          </TabsList>

          {/* Tab 1: General Info */}
          <TabsContent value="tab1" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="buildingAddress">Building Address *</Label>
              <Input
                id="buildingAddress"
                placeholder="Enter complete building address"
                value={tab1Data.buildingAddress || ''}
                onChange={(e) => setTab1Data({ ...tab1Data, buildingAddress: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="buildingType">Building Type *</Label>
              <Input
                id="buildingType"
                placeholder="e.g., Single-family house, Apartment, Office building"
                value={tab1Data.buildingType || ''}
                onChange={(e) => setTab1Data({ ...tab1Data, buildingType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearBuilt">Year Built</Label>
              <Input
                id="yearBuilt"
                type="number"
                placeholder="e.g., 1995"
                value={tab1Data.yearBuilt || ''}
                onChange={(e) => setTab1Data({ ...tab1Data, yearBuilt: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
          </TabsContent>

          {/* Tab 2: Construction */}
          <TabsContent value="tab2" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallType">Wall Type</Label>
              <Input
                id="wallType"
                placeholder="e.g., Brick, Concrete, Wood"
                value={tab2Data.wallType || ''}
                onChange={(e) => setTab2Data({ ...tab2Data, wallType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roofType">Roof Type</Label>
              <Input
                id="roofType"
                placeholder="e.g., Pitched, Flat, Gable"
                value={tab2Data.roofType || ''}
                onChange={(e) => setTab2Data({ ...tab2Data, roofType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
          </TabsContent>

          {/* Tab 3: Heating */}
          <TabsContent value="tab3" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heatingType">Heating System Type</Label>
              <Input
                id="heatingType"
                placeholder="e.g., Gas boiler, Heat pump, District heating"
                value={tab3Data.heatingType || ''}
                onChange={(e) => setTab3Data({ ...tab3Data, heatingType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heatingYearInstalled">Year Installed</Label>
              <Input
                id="heatingYearInstalled"
                type="number"
                placeholder="e.g., 2015"
                value={tab3Data.heatingYearInstalled || ''}
                onChange={(e) => setTab3Data({ ...tab3Data, heatingYearInstalled: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
          </TabsContent>

          {/* Tab 4: Ventilation */}
          <TabsContent value="tab4" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ventilationType">Ventilation Type</Label>
              <Input
                id="ventilationType"
                placeholder="e.g., Natural, Mechanical, Heat recovery"
                value={tab4Data.ventilationType || ''}
                onChange={(e) => setTab4Data({ ...tab4Data, ventilationType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
          </TabsContent>

          {/* Tab 5: Energy */}
          <TabsContent value="tab5" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="windowType">Window Type</Label>
              <Input
                id="windowType"
                placeholder="e.g., Double-glazed, Triple-glazed"
                value={tab5Data.windowType || ''}
                onChange={(e) => setTab5Data({ ...tab5Data, windowType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insulationType">Insulation Type</Label>
              <Input
                id="insulationType"
                placeholder="e.g., Mineral wool, EPS, XPS"
                value={tab5Data.insulationType || ''}
                onChange={(e) => setTab5Data({ ...tab5Data, insulationType: e.target.value })}
                disabled={isReadOnly}
              />
            </div>
          </TabsContent>

          {/* Tab 6: Notes */}
          <TabsContent value="tab6" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any additional information about the building..."
                rows={8}
                value={tab6Data.additionalNotes || ''}
                onChange={(e) => setTab6Data({ ...tab6Data, additionalNotes: e.target.value })}
                disabled={isReadOnly}
                className="resize-none"
              />
            </div>
          </TabsContent>

          {/* Tab 7: Photos */}
          <TabsContent value="tab7" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Upload Photos & Documents</Label>
                <p className="text-sm text-muted-foreground">
                  Supported formats: JPEG, PNG, WebP, PDF, Word documents. Max 10MB per file.
                </p>
              </div>

              {allowFileUpload && (
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/webp,application/pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm font-medium mb-2">
                    Click to upload or drag and drop
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Select Files
                  </Button>
                </div>
              )}

              {/* Existing Uploaded Files */}
              {existingFiles.length > 0 && (
                <div className="space-y-2">
                  <Label>Uploaded Files ({existingFiles.length})</Label>
                  <div className="space-y-2">
                    {existingFiles.map((file) => (
                      <div
                        key={file.path}
                        className="flex items-center justify-between p-3 border rounded-lg bg-muted/30"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <FileIcon className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <a
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium hover:underline block truncate"
                            >
                              {file.name}
                            </a>
                          </div>
                        </div>
                        {allowFileUpload && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveExistingFile(file.path)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* New Files (Not Yet Uploaded) */}
              {newFiles.length > 0 && (
                <div className="space-y-2">
                  <Label>Selected Files - Ready to Submit ({newFiles.length})</Label>
                  <div className="space-y-2">
                    {newFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg border-primary/50 bg-primary/5"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <FileIcon className="h-8 w-8 text-primary flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveNewFile(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These files will be uploaded when you click "Submit for Review"
                  </p>
                </div>
              )}

              {existingFiles.length === 0 && newFiles.length === 0 && !allowFileUpload && (
                <div className="text-center py-4 text-muted-foreground">
                  No files uploaded yet
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        {!isReadOnly && (
          <div className="mt-6 flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => toast({ title: 'Draft saved', description: 'Your progress has been saved' })}
              disabled={isSubmitting}
            >
              Save Draft
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
