export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      aw_projects: {
        Row: {
          category: string | null;
          created_at: string;
          description: string | null;
          id: number;
          image: string | null;
          name: string | null;
          userId: string | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          userId?: string | null;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "aw_projects_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      CompetenceModuleTable: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          id_module: number | null;
          name: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          id_module?: number | null;
          name: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          id_module?: number | null;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "CompetenceModuleTable_id_module_fkey";
            columns: ["id_module"];
            isOneToOne: false;
            referencedRelation: "ModuleTable";
            referencedColumns: ["id"];
          },
        ];
      };
      country: {
        Row: {
          country_name: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          country_name?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          country_name?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      ModuleTable: {
        Row: {
          id: number;
          Module: string;
          nb_composant: number | null;
          Taux: number | null;
        };
        Insert: {
          id?: number;
          Module: string;
          nb_composant?: number | null;
          Taux?: number | null;
        };
        Update: {
          id?: number;
          Module?: string;
          nb_composant?: number | null;
          Taux?: number | null;
        };
        Relationships: [];
      };
      post: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          link: string | null;
          profil_id: string | null;
          title: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          link?: string | null;
          profil_id?: string | null;
          title?: string | null;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          link?: string | null;
          profil_id?: string | null;
          title?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "post_profil_id_fkey";
            columns: ["profil_id"];
            isOneToOne: false;
            referencedRelation: "profil";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "post_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profil";
            referencedColumns: ["user_id"];
          },
        ];
      };
      profil: {
        Row: {
          description: string | null;
          id: string;
          location: string | null;
          name: string;
          user_id: string;
        };
        Insert: {
          description?: string | null;
          id?: string;
          location?: string | null;
          name: string;
          user_id?: string;
        };
        Update: {
          description?: string | null;
          id?: string;
          location?: string | null;
          name?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profil_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      ReactTable: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string | null;
          StatsValue: number | null;
          user_ID: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          StatsValue?: number | null;
          user_ID?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string | null;
          StatsValue?: number | null;
          user_ID?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ReactTable_user_ID_fkey";
            columns: ["user_ID"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      statsValueSkillTable: {
        Row: {
          competence_id: number | null;
          created_at: string;
          id: number;
          score: number | null;
          user_id: string | null;
        };
        Insert: {
          competence_id?: number | null;
          created_at?: string;
          id?: number;
          score?: number | null;
          user_id?: string | null;
        };
        Update: {
          competence_id?: number | null;
          created_at?: string;
          id?: number;
          score?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "statsValueSkillTable_competence_id_fkey";
            columns: ["competence_id"];
            isOneToOne: false;
            referencedRelation: "CompetenceModuleTable";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "statsValueSkillTable_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
