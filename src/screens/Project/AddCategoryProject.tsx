import { LeftButton } from "@components/Common/Buttons/LeftButton";
import { RightButton } from "@components/Common/Buttons/RightButton";
import { StepBackground } from "@components/StepBackground";
import { useAuth } from "@contexts/AuthContext";
import { createProject } from "@services/api/Project";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddCategoryProjectProps = {
  step: {
    get: number;
    set: (newStep: number) => void;
  };
  project: Project;
};

const categories = [
  {
    name: "Design",
  },
  {
    name: "Coding",
  },
  {
    name: "Jeux Vidéos",
  },
  {
    name: "Communication",
  },
];

export const AddCategoryProject: React.FC<AddCategoryProjectProps> = ({
  step,
  project,
}) => {
  const { user } = useAuth();
  const handleCLickCategory = (category: string) => {
    project.category = category;
  };
  const handleCreateProject = async () => {
    project.userId = user?.id;
    await createProject(project);
  };
  return (
    <>
      <ContainerPage>
        <StepBackground />
        <ContainerCategoryProject>
          <Title>Choose your category</Title>
          <ContainerCategory>
            {categories.map((category, key) => (
              <Card
                onClick={() => handleCLickCategory(category.name)}
                key={key}
              >
                <h3>{category.name}</h3>
              </Card>
            ))}
          </ContainerCategory>
          <ContainerButton>
            <div>
              <LeftButton
                text="Back"
                icon="skip-left"
                link="#"
                onClick={() => step.set(step.get - 1)}
              ></LeftButton>
            </div>
            <div>
              <RightButton
                text="Next"
                icon="skip-right"
                link="/projects"
                onClick={() => handleCreateProject()}
              />
            </div>
          </ContainerButton>
        </ContainerCategoryProject>
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

const ContainerCategoryProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 60%;
  height: 60%;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > div {
    width: 30%;
  }
`;

const Card = styled.div`
  width: 45%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    color: ${({ theme }) => theme.colors.dark};
    transition: 0.1s all ease-in-out;
  }
  h3 {
    font-size: ${({ theme }) => theme.size.desktop.medium};
    font-weight: 400;
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

const ContainerCategory = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
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
