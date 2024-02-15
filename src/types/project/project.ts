import { PostgrestError } from "@supabase/supabase-js";

export type Project = {
  id: number;
  name: string;
  description: string;
  skillsId: string;
  image?: string;
  category: string;
  collaborators: string;
  progress: number;
  recruit?: boolean;
  userId?: string;
  score?: number;
};

export interface ProjectData {
  project: Array<Project> | null;
  error: PostgrestError | null;
}
