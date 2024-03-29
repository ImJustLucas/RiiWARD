import { PostgrestError } from "@supabase/supabase-js";

export type Skill = {
  id: number;
  content: string;
};

export interface SkillData {
  skills: Array<Skill> | null;
  error: PostgrestError | null;
}
