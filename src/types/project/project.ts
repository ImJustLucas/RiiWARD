import { PostgrestError } from "@supabase/supabase-js";

export type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  image?: string;
  category: string;
  collaborators: string;
  progress: number;
  recruit?: boolean;
  userId?: string;
  score?: number;
  skillsId: string | string[];
};

export interface ProjectData {
  project: Array<Project> | null;
  error: PostgrestError | null;
}
