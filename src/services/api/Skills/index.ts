import { supabase } from "@services/Supabase";

export class SkillsServices {
  async getAllSkills() {
    const { data, error } = await supabase.from("aw_skills").select("*");

    if (error) {
      console.error(error);
    }

    return data;
  }

  async getAllSkillUser(projectId: string) {
    const { data, error } = await supabase
      .from("aw_skill_project")
      .select("skillId")
      .eq("projectId", projectId);

    if (error) {
      console.error(error);
    }

    return data;
  }
}
