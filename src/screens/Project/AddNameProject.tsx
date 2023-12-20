import { LeftButton } from "@components/Common/Buttons/LeftButton";
import { RightButton } from "@components/Common/Buttons/RightButton";
import { StepBackground } from "@components/StepBackground";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  step: {
    get: number;
    set: (newStep: number) => void;
  };
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
};

export const AddNameProject: React.FC<AddProjectProps> = ({
  step,
  project,
  setProject,
}) => {
  const handleInputNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    project.name = event.target.value;
  };
  const handleInputDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    project.description = event.target.value;
  };
  const handlePassStep = () => {
    setProject((project) => project);
    step.set(step.get + 1);
  };
  return (
    <>
      <ContainerHomeButton>
        <LeftButton text="Previous" icon="skip-left" link="/projects" />
      </ContainerHomeButton>
      <ContainerPage>
        <StepBackground />
        <ContainerAddProject>
          <Title>Give your project a name</Title>
          <ContainerInput>
            <InputName
              onChange={handleInputNameChange}
              type="text"
              placeholder="Project name"
            />
            <InputName
              onChange={handleInputDescriptionChange}
              type="text"
              placeholder="Description"
            />
          </ContainerInput>
          <ContainerButton>
            <RightButton
              text="Next"
              icon="skip-right"
              link="#"
              onClick={() => handlePassStep()}
            />
          </ContainerButton>
        </ContainerAddProject>
      </ContainerPage>
    </>
  );
};

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
`;

const ContainerHomeButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-start;
  justify-content: flex-start;
  width: max-content;
`;

const ContainerAddProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 60%;
  height: 60%;
`;

const InputName = styled.input`
  border: none;
  background: #f5f6f7;
  font-size: 32px;
  text-align: center;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const ContainerButton = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.size.desktop.title};
  text-align: center;
  font-weight: 400;
  position: relative;
  z-index: 2;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
