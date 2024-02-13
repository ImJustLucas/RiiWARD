import { useEffect, useState } from "react";
import { TagSkill } from "@components/Common/Tags/SkillsTag";
import { useAuth } from "@contexts/AuthContext";
import { ProjectsServices } from "@services/api";
import { ProjectData } from "@typesDef/project/project";
import styled from "styled-components";

export const ProfileScreen: React.FC = () => {
  const tabTags = [
    "React",
    "Node",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Next.js",
    "Figma",
    "Adobe XD",
  ];

  const { user } = useAuth();
  const projectService = new ProjectsServices();
  const [projects, setProjects] = useState<ProjectData>({
    project: null,
    error: null,
  });

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { project, error } = await projectService.getAllUserProject(
          user?.id as string,
        );
        setProjects({ project, error });
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      }
    };

    getProjects();
  }, []);

  console.log(projects);

  return (
    <>
      <ProfilPageContainer>
        <RowInfosContainer>
          <UserContainer>
            <TitleSection>About me</TitleSection>
            <InfosUserContainer>
              <RowContainer style={{ gap: "12px" }}>
                <h3>Full name</h3>
                <h3>Name</h3>
              </RowContainer>
              <RowContainer>
                <p>Mail</p>
              </RowContainer>
              <RowContainer style={{ gap: "12px" }}>
                <p>Cursus</p>
                <p>Développeur</p>
              </RowContainer>
            </InfosUserContainer>
          </UserContainer>
          <SkillsContainer>
            <TitleSection>Skills</TitleSection>
            <ContainerInfosSkills>
              <RowContainer>
                <RowSkills>
                  {tabTags.map((tag, index) => (
                    <TagSkill content={tag} key={index} />
                  ))}
                </RowSkills>
              </RowContainer>
            </ContainerInfosSkills>
          </SkillsContainer>
        </RowInfosContainer>
        <ProjectContainer>
          <TitleSection
            style={{
              rotate: "-90deg",
              width: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Project
          </TitleSection>
        </ProjectContainer>
      </ProfilPageContainer>
    </>
  );
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfilPageContainer = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: #f5f6f7;
  gap: 12px;
`;

const RowInfosContainer = styled(RowContainer)`
  width: 100%;
  height: 50%;
  gap: 12px;
`;

const UserContainer = styled(ColumnContainer)`
  width: 30%;
  border-radius: 16px;
  background-color: #ffffff;
  padding: 12px 24px;
`;

const SkillsContainer = styled(ColumnContainer)`
  width: 70%;
  border-radius: 16px;
  background-color: #ffffff;
  padding: 12px 24px;
`;

const ProjectContainer = styled(ColumnContainer)`
  width: 100%;
  border-radius: 16px;
  background-color: #ffffff;
  height: 50%;
`;

const TitleSection = styled.h2`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  text-transform: uppercase;
  color: #000000;
`;

const InfosUserContainer = styled(ColumnContainer)`
  gap: 12px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ContainerInfosSkills = styled(ColumnContainer)`
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const RowSkills = styled(RowContainer)`
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;
