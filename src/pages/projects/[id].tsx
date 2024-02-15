import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import { SingleProjectScreen } from "@screens/Project/SingleProjectScreen";
import { ProjectsServices } from "@services/api";
import { Project } from "@typesDef/project/project";
import { useRouter } from "next/router";

const _ProjectsServices = new ProjectsServices();

export default function ProjectById() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const fetchProjects = async (id: string) => {
      try {
        const response = await _ProjectsServices.getProjectById(id);
        if (response?.error) throw new Error(response.error.message);
        if (!response?.project)
          throw new Error("No project found with the given id");
        setData(response?.project);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setData([]);
        setLoading(false);
      }
    };
    fetchProjects(router.query.id as string);
  }, [router.query.id, router.isReady]);

  if (loading || !router.isReady) {
    return <Loading />;
  }

  if (data.length === 0) {
    console.error("Error: no project found with the given id");
    router.push("/404");
    return null;
  }

  if (data.length > 1) {
    console.error("Error: more than one project found with the same id");
    return <div>Error: more than one project found with the same id</div>;
  }

  return <SingleProjectScreen data={data[0]} />;
}
