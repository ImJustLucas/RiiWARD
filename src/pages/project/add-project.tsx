import { useState } from "react";
import { AddNameProject } from "@screens/Project/AddNameProject";
import { Step2 } from "@screens/Step2";
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
          setProject={updateProject}
        />
      )}
      {step == 2 && <Step2 />}
    </>
  );
}