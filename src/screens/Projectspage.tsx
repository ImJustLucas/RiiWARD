import { useEffect, useState } from "react";
import Avatar from "@assets/images/avatar.png";
import ProjectImage from "@assets/images/projectImage.png";
import { BackdropComponent } from "@components/Common/BackDrop/Backdrop";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { useAuth } from "@contexts/AuthContext";
import { UsersServices } from "@services/api/Users";
import { Project } from "@typesDef/project/project";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type ProjectsScreenProps = {
  fetch: () => Promise<Array<Project>>;
};

const _UsersServices = new UsersServices();

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ fetch }) => {
  const { isLogged } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);

  const [evenIndexProjects, setEvenIndexProjects] = useState<
    Array<{
      project: Project;
      userEmail: string;
      userAvatar: string | null;
    }>
  >([]);

  const [oddIndexProjects, setOddIndexProjects] = useState<
    Array<{
      project: Project;
      userEmail: string;
      userAvatar: string | null;
    }>
  >([]);

  const [projectsWithUserEmail, setProjectsWithUserEmail] = useState<
    Array<{
      project: Project;
      userEmail: string;
      userAvatar: string | null;
    }>
  >([]);

  useEffect(() => {
    fetch().then((data) => setProjects(data));
  }, [fetch]);

  useEffect(() => {
    if (projects) {
      Promise.all(
        projects.map(async (data) => {
          const user = await _UsersServices.getUserById(data.userId as string);
          return {
            project: data,
            userEmail: user?.email,
            userAvatar: user?.avatar,
          };
        }),
      ).then((updatedProjects) => {
        setProjectsWithUserEmail(updatedProjects);
      });
    }
  }, [projects]);

  useEffect(() => {
    setEvenIndexProjects(
      projectsWithUserEmail.filter((_, index) => index % 2 === 0),
    );
    setOddIndexProjects(
      projectsWithUserEmail.filter((_, index) => index % 2 !== 0),
    );
  }, [projectsWithUserEmail]);

  return (
    <ProjectsContainer>
      {isLogged ? (
        <Link href="/add-project">
          <StyledButton>
            <span>Ajoutez votre projet</span>
            <i className="ri-arrow-right-up-line"></i>
          </StyledButton>
        </Link>
      ) : (
        <ContainerSignup>
          <p>Connectez vous pour ajouter un projet</p>
        </ContainerSignup>
      )}

      <RoundedContainer width="100%" background="light" padding="36px">
        <MainContainer>
          {projects.length > 0 ? (
            <>
              <Column>
                {evenIndexProjects &&
                  evenIndexProjects.map((data, index) => (
                    <RoundedContainer
                      key={index}
                      width="100%"
                      link="#"
                      padding="0"
                      height="378px"
                      background="dark"
                      userBar={{
                        avatar: data.userAvatar ? data.userAvatar : Avatar,
                        username: data.userEmail,
                        project: data.project.name,
                        gap: "16px",
                        positionx: "left",
                      }}
                    >
                      <ImageContainer>
                        <BackdropComponent />
                        <Image
                          src={
                            data.project.image
                              ? data.project.image
                              : ProjectImage
                          }
                          alt={data.project.name}
                          layout="fill"
                        />
                      </ImageContainer>
                    </RoundedContainer>
                  ))}
              </Column>
              <Column>
                <StyledSubtitle>
                  TROUVEZ VOTRE PROCHAIN PROJET PRÉFÉRÉ
                </StyledSubtitle>
                {oddIndexProjects &&
                  oddIndexProjects.map((data, index) => (
                    <RoundedContainer
                      key={index}
                      width="100%"
                      link="#"
                      padding="0"
                      height="378px"
                      background="dark"
                      userBar={{
                        avatar: data.userAvatar ? data.userAvatar : Avatar,
                        username: data.userEmail,
                        project: data.project.name,
                        gap: "16px",
                        positionx: "left",
                      }}
                    >
                      <ImageContainer>
                        <BackdropComponent />
                        <Image
                          src={
                            data.project.image
                              ? data.project.image
                              : ProjectImage
                          }
                          alt={data.project.name}
                          layout="fill"
                        />
                      </ImageContainer>
                    </RoundedContainer>
                  ))}
              </Column>
            </>
          ) : (
            <StyledLoading>Chargement ...</StyledLoading>
          )}
        </MainContainer>
      </RoundedContainer>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: calc(100% - 100px);
  padding: 0 50px 50px;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 15px;
  padding: 8px 24px;
  color: white;
  font-size: 16px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    color: white;
  }
`;

const ContainerSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

const MainContainer = styled.main`
  display: flex;
  gap: 50px;
  width: 100%;
  box-sizing: border-box;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 50%;
`;

const StyledSubtitle = styled.h2`
  text-align: right;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-top: 24px;
  font-size: ${({ theme }) => theme.size.title};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 24px;
  }
`;

const StyledLoading = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  width: 100%;
`;
