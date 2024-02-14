import { supabase } from "@services/Supabase";

export class SkillsServices {
  async getAllSkills() {
    const { data, error } = await supabase.from("aw_skills").select("*");

    if (error) {
      console.error(error);
    }

    return data;
  }
}
