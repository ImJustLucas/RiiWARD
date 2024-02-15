import { useEffect, useState } from "react";
import { CardProject } from "@components/CardProjects/CardProject";
import { LinkSeeAll } from "@components/Common/Links/SeeAllLink";
import { TagSkill } from "@components/Common/Tags/SkillsTag";
import { useAuth } from "@contexts/AuthContext";
import { ProjectsServices } from "@services/api";
import { SkillsServices } from "@services/api";
import { ProjectData } from "@typesDef/project/project";
import { Skill, SkillData } from "@typesDef/skill/skill";
import { useRouter } from "next/router";
import styled from "styled-components";

export const ProfileScreen: React.FC = () => {
  const skillService = new SkillsServices();
  const router = useRouter();
  const { user, isLogged } = useAuth();
  const projectService = new ProjectsServices();
  const [projects, setProjects] = useState<ProjectData>({
    project: null,
    error: null,
  });

  if (isLogged === false) {
    router.push("/auth/signin");
  }

  const [skills, setSkill] = useState<SkillData>({
    skills: null,
    error: null,
  });

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { project, error } = await projectService.getAllUserProject(
          user?.id as string,
        );
        setProjects({ project, error });

        if (project) {
          const fetchSkills = await skillService.getAllSkillUser(
            project.map((p) => p.id),
          );

          const fetchSkillsWithContent = fetchSkills.map((skill: Skill) => ({
            ...skill,
            content: skill,
          }));

          setSkill({ skills: fetchSkillsWithContent, error: null });
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      }
    };

    getProjects();
  }, []);

  return (
    <>
      {isLogged === false ? (
        <p>
          Vous devez être connecté pour accéder à cette page. <br />
          Redirection vers la page de connexion
        </p>
      ) : (
        <ProfilPageContainer>
          <RowInfosContainer>
            <UserContainer>
              <TitleSection>À propos</TitleSection>
              <InfosUserContainer>
                <RowContainer style={{ gap: "12px" }}>
                  <h3>Nom</h3>
                  <h3>Prénom</h3>
                </RowContainer>
                <RowContainer>
                  <p>{user?.email || "Email user"}</p>
                </RowContainer>
                <RowContainer style={{ gap: "12px" }}>
                  <p>Cursus: </p>
                  <p>Développeur</p>
                </RowContainer>
              </InfosUserContainer>
            </UserContainer>
            <SkillsContainer>
              <TitleSection>Skills</TitleSection>
              <ContainerInfosSkills>
                <RowContainer>
                  <RowSkills style={{ justifyContent: "space-around" }}>
                    {skills.skills && skills.skills?.length > 0 ? (
                      skills.skills?.map((tag, index) => (
                        <TagSkill
                          content={tag.content}
                          isIcon={false}
                          key={index}
                        />
                      ))
                    ) : (
                      <p>Aucun skills</p>
                    )}
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
              Projet
            </TitleSection>
            <ColumnContainer
              style={{
                width: "100%",
                justifyContent: "flex-end",
                padding: "12px 24px",
                gap: "12px",
              }}
            >
              <RowContainer style={{ height: "100%", gap: "12px" }}>
                {projects.project && projects.project?.length !== 0 ? (
                  projects.project
                    ?.slice(0, 2)
                    .map((project, index) => (
                      <CardProject
                        key={index}
                        title={project.name}
                        description={project.description}
                        image={
                          project.image
                            ? project.image
                            : "https://via.placeholder.com/150"
                        }
                      />
                    ))
                ) : (
                  <ColumnContainer
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "90%",
                      height: "160px",
                    }}
                  >
                    <p>Aucun projet référencé.</p>
                  </ColumnContainer>
                )}
              </RowContainer>
              {projects.project && projects.project?.length !== 0 ? (
                <div style={{ height: "fit-content", textAlign: "end" }}>
                  <LinkSeeAll link="/" content="Voir tous les projets" />
                </div>
              ) : null}
            </ColumnContainer>
          </ProjectContainer>
        </ProfilPageContainer>
      )}
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
  height: 80vh;
  padding: 0 50px 50px;
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

const ProjectContainer = styled(RowContainer)`
  width: 100%;
  border-radius: 16px;
  background-color: #ffffff;
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
  width: 100%;
  flex-wrap: wrap;
  gap: 12px;
`;
