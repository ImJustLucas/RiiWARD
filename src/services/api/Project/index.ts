import { supabase } from "@services/Supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { Project, ProjectData } from "@typesDef/project/project";

export async function createProject(projet: Project) {
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

export async function getAllUserProject(userId: string): Promise<ProjectData> {
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
