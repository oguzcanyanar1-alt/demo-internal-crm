export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'customer' | 'engineer' | 'expert'
export type CaseStatus = 'waiting_for_data' | 'data_submitted' | 'blocked' | 'completed'
export type ResponsibleActor = 'customer' | 'expert'
export type ActivityType = 'case_created' | 'data_submitted' | 'case_blocked' | 'case_completed' | 'file_uploaded' | 'case_reopened'

// Widget tab data types (MVP simplified version)
export interface Tab1Data {
  buildingAddress?: string
  buildingType?: string
  yearBuilt?: string
}

export interface Tab2Data {
  wallType?: string
  roofType?: string
}

export interface Tab3Data {
  heatingType?: string
  heatingYearInstalled?: string
}

export interface Tab4Data {
  ventilationType?: string
}

export interface Tab5Data {
  windowType?: string
  insulationType?: string
}

export interface Tab6Data {
  additionalNotes?: string
}

export interface CaseActivity {
  id: string
  case_id: string
  activity_type: ActivityType
  actor_id: string
  actor_name: string
  actor_role: UserRole
  description: string
  metadata: Json
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: UserRole
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: UserRole
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: UserRole
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      cases: {
        Row: {
          id: string
          case_number: string
          status: CaseStatus
          customer_id: string
          assigned_expert_id: string | null
          responsible_actor: ResponsibleActor
          engineer_blocking_message: string | null
          created_at: string
          updated_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          case_number?: string
          status?: CaseStatus
          customer_id: string
          assigned_expert_id?: string | null
          responsible_actor: ResponsibleActor
          engineer_blocking_message?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          case_number?: string
          status?: CaseStatus
          customer_id?: string
          assigned_expert_id?: string | null
          responsible_actor?: ResponsibleActor
          engineer_blocking_message?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
      }
      case_data: {
        Row: {
          id: string
          case_id: string
          tab1_data: Tab1Data
          tab2_data: Tab2Data
          tab3_data: Tab3Data
          tab4_data: Tab4Data
          tab5_data: Tab5Data
          tab6_data: Tab6Data
          tab7_file_ids: string[]
          filled_by_expert_id: string | null
          filled_by_expert_name: string | null
          submitted_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          case_id: string
          tab1_data?: Tab1Data
          tab2_data?: Tab2Data
          tab3_data?: Tab3Data
          tab4_data?: Tab4Data
          tab5_data?: Tab5Data
          tab6_data?: Tab6Data
          tab7_file_ids?: string[]
          filled_by_expert_id?: string | null
          filled_by_expert_name?: string | null
          submitted_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          case_id?: string
          tab1_data?: Tab1Data
          tab2_data?: Tab2Data
          tab3_data?: Tab3Data
          tab4_data?: Tab4Data
          tab5_data?: Tab5Data
          tab6_data?: Tab6Data
          tab7_file_ids?: string[]
          filled_by_expert_id?: string | null
          filled_by_expert_name?: string | null
          submitted_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
