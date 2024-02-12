import { supabase } from "@services/Supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { Project, ProjectData } from "@typesDef/project/project";

export class ProjectsServices {
  async getProjects() {
    try {
      const { data: projects } = await supabase.from("aw_projects").select("*");
      return projects;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  async getAllUserProject(userId: string): Promise<ProjectData> {
    try {
      const { data: projects, error } = await supabase
        .from("aw_projects")
        .select("*")
        .eq("userId", userId);

      return { project: projects, error };
    } catch (error: unknown) {
      const postgrestError = error as PostgrestError | null;
      console.error(
        "Erreur lors de la récupération des projets :",
        postgrestError,
      );
      return { project: null, error: postgrestError };
    }
  }

  async createProject(projet: Project) {
    try {
      const { data: aw_projects, error } = await supabase
        .from("aw_projects")
        .insert([projet]);
      return { aw_projects, error };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  async getProjectById(projectId: string) {
    try {
      const { data: project, error } = await supabase
        .from("aw_projects")
        .select("*")
        .eq("id", projectId);
      return { project, error };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}
