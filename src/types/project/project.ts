import { PostgrestError } from "@supabase/supabase-js";

export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  category: string;
  userId?: string;
};

export interface ProjectData {
  project: Array<Project> | null;
  error: PostgrestError | null;
}
