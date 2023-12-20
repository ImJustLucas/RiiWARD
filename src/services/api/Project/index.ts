import { supabase } from "@services/Supabase";
import { Project } from "@typesDef/project/project";

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
