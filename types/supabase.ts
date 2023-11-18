export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      feedback: {
        Row: {
          email: string
          feedbacktext: string
          id: number
          name: string | null
          sentiment: Database["public"]["Enums"]["mood"]
          timestamp: string | null
        }
        Insert: {
          email: string
          feedbacktext: string
          id?: number
          name?: string | null
          sentiment: Database["public"]["Enums"]["mood"]
          timestamp?: string | null
        }
        Update: {
          email?: string
          feedbacktext?: string
          id?: number
          name?: string | null
          sentiment?: Database["public"]["Enums"]["mood"]
          timestamp?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      mood: "happy" | "neutral" | "unhappy"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
