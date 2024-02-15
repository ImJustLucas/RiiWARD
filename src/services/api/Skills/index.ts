/* eslint-disable @typescript-eslint/ban-ts-comment */
import { supabase } from "@services/Supabase";

export class SkillsServices {
  async getAllSkills() {
    const { data, error } = await supabase.from("aw_skills").select("*");

    if (error) {
      console.error(error);
    }

    return data;
  }

  async getAllSkillUser(projectId: Array<number>) {
    const { data, error } = await supabase.rpc("get_projects_by_id", {
      projectids: projectId,
    });
    if (error) {
      console.error(error);
    }

    const allSkills = data.reduce((acc: unknown, curr: unknown) => {
      // @ts-ignore
      return acc.concat(curr.skills);
    }, []);

    return allSkills;
  }

  async getOneSkill(skillId: number) {
    const { data, error } = await supabase
      .from("aw_skills")
      .select("*")
      .eq("id", skillId);

    if (error) {
      console.error(error);
    }

    return data;
  }
}
