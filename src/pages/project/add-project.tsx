import { useState } from "react";
import { AddCategoryProject } from "@screens/Project/AddCategoryProject";
import { AddCoverProject } from "@screens/Project/AddCoverProject";
import { AddNameProject } from "@screens/Project/AddNameProject";
import { Project } from "@typesDef/project/project";

export default function AddProject() {
  const [step, setStep] = useState<number>(1);
  const [project, setProject] = useState<Project>({} as Project);
  const updateProject = (updatedProject: Project) => {
    setProject(updatedProject);
    console.log("New Project", project);
  };
  return (
    <>
      {step == 1 && (
        <AddNameProject
          step={{ get: step, set: setStep }}
          setProject={() => updateProject}
        />
      )}
      {step == 2 && <AddCoverProject step={{ get: step, set: setStep }} />}
      {step == 3 && <AddCategoryProject step={{ get: step, set: setStep }} />}
    </>
  );
}
