// pages/projects.tsx
import React from "react";
import { Header } from "@components/Header/Index";
import { ProjectsScreen } from "@screens/Projectspage"; // Assurez-vous d'importer le composant Projects

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Header
        textHeader={{
          title: "Search for the best project",
        }}
      />
      <ProjectsScreen />
    </>
  );
};

export default ProjectsPage;
