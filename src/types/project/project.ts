import { PostgrestError } from "@supabase/supabase-js";

export type Project = {
  id: number;
  name: string;
  description: string;
  category: string;
  collaborators?: Array<string>;
  image?: string;
  skillsId?: Array<number>;
  userId?: string;
  score: number;
};

export interface ProjectData {
  project: Array<Project> | null;
  error: PostgrestError | null;
}
