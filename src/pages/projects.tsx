import { Header } from "@components/Header/Index";
import { ProjectsScreen } from "@screens/Projectspage";
import { ProjectsServices } from "@services/api/Project";

const _ProjectsServices = new ProjectsServices();

type ProjectType = {
  category: string | null;
  created_at: string;
  description: string | null;
  id: number;
  image: string | null;
  name: string;
  userId: string;
  // Add any other properties as needed
};

const ProjectsPage: React.FC = () => {
  const fetchProjects = async (): Promise<ProjectType[]> => {
    try {
      const response = await _ProjectsServices.getProjects();
      return response || [];
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  };

  return (
    <>
      <Header
        textHeader={{
          title: "Search for the best project",
        }}
      />
      <ProjectsScreen fetch={fetchProjects} />
    </>
  );
};

export default ProjectsPage;
