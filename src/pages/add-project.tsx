/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { LeftButton } from "@components/Common/Buttons/LeftButton";
import { AddProjectBar } from "@components/Footer/AddProjectBar";
import { StepBackground } from "@components/StepBackground";
import { useAuth } from "@contexts/AuthContext";
import { Step1 } from "@screens/Project/Step1";
import { Step2 } from "@screens/Project/Step2";
import { Step3 } from "@screens/Project/Step3";
import { Step4 } from "@screens/Project/Step4";
import { Step5 } from "@screens/Project/Step5";
import { Step6 } from "@screens/Project/Step6";
import { ProjectsServices } from "@services/api/Project";
import { Project } from "@typesDef/project/project";
import { useRouter } from "next/router";
import { toast } from "sonner";
import styled from "styled-components";

export default function AddProject() {
  const maxStep = 6;
  const [step, setStep] = useState<number>(1);
  const [project, setProject] = useState<Project>({} as Project);
  const [translateY, setTranslateY] = useState<number>(0);
  const { isLogged, user } = useAuth();
  const _ProjectsServices = new ProjectsServices();
  const router = useRouter();

  const updateProject = (updatedProject: Project) => {
    setProject(updatedProject);
  };

  const handleSubmit = async () => {
    project.userId = user?.id;
    project.category = "Développement";

    if (project.name === undefined) {
      toast.error("Please fill in the title of your project.");
      return;
    }

    if (project.description === undefined) {
      toast.error("Please fill in the description of your project.");
      return;
    }

    if (project.skillsId === "") {
      toast.error("Please fill in the skills used in your project.");
      return;
    }

    if (project.image === undefined) {
      toast.error("Please fill in the image of your project.");
      return;
    }

    if (project.collaborators === "") {
      toast.error("Please fill in the collaborators of your project.");
      return;
    }

    if (project.progress === undefined) {
      toast.error("Please fill in the progress of your project.");
      return;
    }

    project.image =
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const post = await _ProjectsServices.createProject(project);
    if (post?.error !== null) {
      toast.error("Something wrong occured, please try again later.");
    } else {
      toast.success("Project successfully added.");
      setTimeout(() => {
        router.push("/projects");
      }, 1500);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
  };

  return (
    <>
      <style global jsx>{`
        .AppLayout {
          padding: 0;
        }
      `}</style>

      <ContainerHomeButton>
        <LeftButton text="Back to home" icon="skip-left" link="/projects" />
      </ContainerHomeButton>
      {isLogged ? (
        <GlobalContainerAddProject>
          <StepBackground />
          <FormContainer>
            <Form
              style={{ transform: `translateY(-${translateY}px)` }}
              onKeyDown={handleKeyPress}
            >
              <Step1
                project={project}
                setProject={() => updateProject(project)}
                id="step-1"
                className={step > 1 ? "show disabled" : step >= 1 ? "show" : ""}
                style={{ top: step >= 1 ? "0" : "100vh" }}
              />
              <Step2
                project={project}
                setProject={() => updateProject(project)}
                id="step-2"
                className={step > 2 ? "show disabled" : step >= 2 ? "show" : ""}
                style={{ top: step >= 2 ? "0" : "100vh" }}
              />
              <Step3
                project={project}
                setProject={() => updateProject(project)}
                id="step-3"
                className={step > 3 ? "show disabled" : step >= 3 ? "show" : ""}
                style={{ top: step >= 3 ? "0" : "100vh" }}
              />
              <Step4
                project={project}
                setProject={() => updateProject(project)}
                id="step-4"
                className={step > 4 ? "show disabled" : step >= 4 ? "show" : ""}
                style={{ top: step >= 4 ? "0" : "100vh" }}
              />
              <Step5
                project={project}
                setProject={() => updateProject(project)}
                id="step-5"
                className={step > 5 ? "show disabled" : step >= 5 ? "show" : ""}
                style={{ top: step >= 5 ? "0" : "100vh" }}
              />
              <Step6
                project={project}
                setProject={() => updateProject(project)}
                id="step-6"
                className={step > 6 ? "show disabled" : step >= 6 ? "show" : ""}
                style={{ top: step >= 6 ? "0" : "100vh" }}
              />
            </Form>
          </FormContainer>
          <AddProjectBar
            step={{ get: step, set: setStep, max: maxStep }}
            translate={{ get: translateY, set: setTranslateY }}
            submit={handleSubmit}
          />
        </GlobalContainerAddProject>
      ) : (
        <div>Not logged</div>
      )}
    </>
  );
}

const GlobalContainerAddProject = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerHomeButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 33%;
  width: 50%;
  padding: 16px;
  transition: all 0.5s ease-in-out;
  gap: 32px;

  & > div {
    opacity: 0;
    position: relative;
    transition: all 1s ease-in-out;

    &.show {
      position: relative;
      opacity: 1;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.6;
      filter: blur(1px);
    }
  }
`;
