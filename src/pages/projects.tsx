import { Header } from "@components/Header/Index";
import { ProjectsScreen } from "@screens/Projectspage";
import { ProjectsServices } from "@services/api/Project";
import { Project } from "@typesDef/project/project";

const _ProjectsServices = new ProjectsServices();

const ProjectsPage: React.FC = () => {
  const fetchProjects = async (): Promise<Project[]> => {
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
