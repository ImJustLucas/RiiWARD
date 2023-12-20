import { supabase } from "@services/Supabase";

export class ProjectsServices {
  async getProjects() {
    // const supabase = createServerSupabaseClient();
    try {
      const { data: projects } = await supabase.from("aw_projects").select("*");
      return projects;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}
