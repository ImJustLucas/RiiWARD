export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      aw_projects: {
        Row: {
          category: string | null;
          collaborators: string | null;
          created_at: string;
          description: string;
          id: number;
          image: string | null;
          name: string;
          progress: number | null;
          recruit: boolean | null;
          skillsId: number;
          userId: string | null;
        };
        Insert: {
          category?: string | null;
          collaborators?: string | null;
          created_at?: string;
          description: string;
          id?: number;
          image?: string | null;
          name: string;
          progress?: number | null;
          recruit?: boolean | null;
          skillsId: number;
          userId?: string | null;
        };
        Update: {
          category?: string | null;
          collaborators?: string | null;
          created_at?: string;
          description?: string;
          id?: number;
          image?: string | null;
          name?: string;
          progress?: number | null;
          recruit?: boolean | null;
          skillsId?: number;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "aw_projects_skillsId_fkey";
            columns: ["skillsId"];
            isOneToOne: false;
            referencedRelation: "aw_skills";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "aw_projects_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_aw_projects_collaborators_fkey";
            columns: ["collaborators"];
            isOneToOne: false;
            referencedRelation: "aw_users";
            referencedColumns: ["id"];
          },
        ];
      };
      aw_skill_project: {
        Row: {
          created_at: string;
          id: number;
          projectId: number | null;
          skillId: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          projectId?: number | null;
          skillId?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          projectId?: number | null;
          skillId?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_aw_skill_project_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "aw_projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_aw_skill_project_skillId_fkey";
            columns: ["skillId"];
            isOneToOne: false;
            referencedRelation: "aw_skills";
            referencedColumns: ["id"];
          },
        ];
      };
      aw_skills: {
        Row: {
          content: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      aw_users: {
        Row: {
          email: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
        };
        Insert: {
          email?: string | null;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
        };
        Update: {
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
        };
        Relationships: [];
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
          logo_URL: string | null;
          Module: string;
          nb_composant: number | null;
          Taux: number | null;
        };
        Insert: {
          id?: number;
          logo_URL?: string | null;
          Module: string;
          nb_composant?: number | null;
          Taux?: number | null;
        };
        Update: {
          id?: number;
          logo_URL?: string | null;
          Module?: string;
          nb_composant?: number | null;
          Taux?: number | null;
        };
        Relationships: [];
      };
      N4I_Lessons: {
        Row: {
          author: string | null;
          content: string | null;
          cursus: string | null;
          id: number;
          name: string;
          year: number | null;
        };
        Insert: {
          author?: string | null;
          content?: string | null;
          cursus?: string | null;
          id?: number;
          name: string;
          year?: number | null;
        };
        Update: {
          author?: string | null;
          content?: string | null;
          cursus?: string | null;
          id?: number;
          name?: string;
          year?: number | null;
        };
        Relationships: [];
      };
      N4I_Speakers: {
        Row: {
          cursus: string | null;
          email: string | null;
          id: number;
          name: string;
        };
        Insert: {
          cursus?: string | null;
          email?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          cursus?: string | null;
          email?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      N4I_Students: {
        Row: {
          cursus: string | null;
          email: string | null;
          id: number;
          name: string;
          year: number | null;
        };
        Insert: {
          cursus?: string | null;
          email?: string | null;
          id?: number;
          name: string;
          year?: number | null;
        };
        Update: {
          cursus?: string | null;
          email?: string | null;
          id?: number;
          name?: string;
          year?: number | null;
        };
        Relationships: [];
      };
      post: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          link: string | null;
          module: string;
          profil_id: string | null;
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          link?: string | null;
          module: string;
          profil_id?: string | null;
          title: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          link?: string | null;
          module?: string;
          profil_id?: string | null;
          title?: string;
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
      schoolModule: {
        Row: {
          id: number;
          module: string;
        };
        Insert: {
          id?: number;
          module: string;
        };
        Update: {
          id?: number;
          module?: string;
        };
        Relationships: [];
      };
      spheriim_class: {
        Row: {
          axe: string | null;
          created_at: string;
          id: number;
          name: string | null;
          title: string | null;
        };
        Insert: {
          axe?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          title?: string | null;
        };
        Update: {
          axe?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_spheriim_class_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "spheriim_student";
            referencedColumns: ["id"];
          },
        ];
      };
      spheriim_student: {
        Row: {
          birthday: string | null;
          class_id: number | null;
          created_at: string | null;
          email: string | null;
          experiences: Json | null;
          firstname: string | null;
          id: number;
          links: Json | null;
          name: string | null;
          personal_description: string | null;
          picture: string | null;
          project_description: string | null;
          school_year: number | null;
          skills: Json | null;
          start_year: string | null;
          studies: Json | null;
          tools: Json | null;
          wished_improvement: Json | null;
        };
        Insert: {
          birthday?: string | null;
          class_id?: number | null;
          created_at?: string | null;
          email?: string | null;
          experiences?: Json | null;
          firstname?: string | null;
          id?: number;
          links?: Json | null;
          name?: string | null;
          personal_description?: string | null;
          picture?: string | null;
          project_description?: string | null;
          school_year?: number | null;
          skills?: Json | null;
          start_year?: string | null;
          studies?: Json | null;
          tools?: Json | null;
          wished_improvement?: Json | null;
        };
        Update: {
          birthday?: string | null;
          class_id?: number | null;
          created_at?: string | null;
          email?: string | null;
          experiences?: Json | null;
          firstname?: string | null;
          id?: number;
          links?: Json | null;
          name?: string | null;
          personal_description?: string | null;
          picture?: string | null;
          project_description?: string | null;
          school_year?: number | null;
          skills?: Json | null;
          start_year?: string | null;
          studies?: Json | null;
          tools?: Json | null;
          wished_improvement?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "spheriim_student_class_id_fkey";
            columns: ["class_id"];
            isOneToOne: false;
            referencedRelation: "spheriim_class";
            referencedColumns: ["id"];
          },
        ];
      };
      spheriim_teacher: {
        Row: {
          created_at: string;
          email: string | null;
          experiences: Json | null;
          firstname: string | null;
          fun_facts: string | null;
          id: number;
          links: Json | null;
          name: string | null;
          personal_description: string | null;
          picture: string | null;
          project_description: string | null;
          skills: Json | null;
          speciality: string | null;
          studies: Json | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          experiences?: Json | null;
          firstname?: string | null;
          fun_facts?: string | null;
          id?: number;
          links?: Json | null;
          name?: string | null;
          personal_description?: string | null;
          picture?: string | null;
          project_description?: string | null;
          skills?: Json | null;
          speciality?: string | null;
          studies?: Json | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          experiences?: Json | null;
          firstname?: string | null;
          fun_facts?: string | null;
          id?: number;
          links?: Json | null;
          name?: string | null;
          personal_description?: string | null;
          picture?: string | null;
          project_description?: string | null;
          skills?: Json | null;
          speciality?: string | null;
          studies?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_spheriim_teacher_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "spheriim_class";
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
};

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
