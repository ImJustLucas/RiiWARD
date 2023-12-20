import { Header } from "@components/Header/Index";
import { ProjectsScreen } from "@screens/Projectspage";
import { ProjectsServices } from "@services/api/Projects";

const _ProjectsServices = new ProjectsServices();

const ProjectsPage: React.FC = () => {
  const fetchProjects = async (): Promise<object[]> => {
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
