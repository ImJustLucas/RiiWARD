/* eslint-disable @typescript-eslint/ban-ts-comment */
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
      const skills = projet.skillsId;

      // @ts-ignore
      projet.skillsId = null;
      const { data: aw_projects, error } = await supabase
        .from("aw_projects")
        .insert([projet])
        .select();

      if (skills) {
        // @ts-ignore
        skills.forEach(async (skill) => {
          await supabase
            .from("aw_skill_project")
            // @ts-ignore
            .insert([{ projectId: aw_projects[0].id, skillId: skill }]);
        });
      }
      return { aw_projects, error };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  async getProjectById(projectId: string) {
    try {
      const { data: project, error } = await supabase.rpc(
        "populate_projects_by_id",
        {
          projectids: [projectId],
        },
      );
      return { project, error };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}
