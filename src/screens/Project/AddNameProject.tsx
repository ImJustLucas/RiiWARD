import { RightButton } from "@components/RightButton";
import { StepBackground } from "@components/StepBackground";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  step: {
    get: number;
    set: (newStep: number) => void;
  };
  setProject: React.Dispatch<React.SetStateAction<Project>>;
};

export const AddNameProject: React.FC<AddProjectProps> = ({
  step,
  setProject,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const projectName = event.target.value;
    setProject((prevProject) => ({ ...prevProject, name: projectName }));
  };
  return (
    <>
      <ContainerPage>
        <StepBackground />
        <ContainerAddProject>
          <Title>Give your project a name</Title>
          <ContainerInput>
            <InputName
              onChange={handleInputChange}
              type="text"
              placeholder="Project name"
            />
          </ContainerInput>
          <ContainerButton>
            <RightButton
              text="Next"
              icon="skip-right"
              link="#"
              onClick={() => step.set(step.get + 1)}
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
`;

const ContainerInput = styled.div`
  display: flex;
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
