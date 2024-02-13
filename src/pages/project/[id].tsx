import { useEffect, useState } from "react";
import { SingleProjectScreen } from "@screens/Project/SingleProjectScreen";
import { ProjectsServices } from "@services/api";
import { Project } from "@typesDef/project/project";
import { useRouter } from "next/router";

const _ProjectsServices = new ProjectsServices();

export default function ProjectById() {
  const [data, setData] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const fetchProjects = async (id: string) => {
      try {
        const response = await _ProjectsServices.getProjectById(id);
        setData(response?.project);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setData([]);
      }
    };
    fetchProjects(router.query.id as string);
  }, [router.query.id, router.isReady]);

  if (!data || data.length === 0 || !router.isReady) {
    return <div>Loading...</div>;
  }

  return <SingleProjectScreen data={data[0]} />;
}
