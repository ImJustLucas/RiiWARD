import { useEffect, useState } from "react";
import ProjectImage from "@assets/images/projectImage.png";
import { BackdropComponent } from "@components/Common/BackDrop/Backdrop";
import { DefaultButton } from "@components/Common/Buttons/DefaultButton";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { useAuth } from "@contexts/AuthContext";
import { UsersServices } from "@services/api/Users";
import { Project } from "@typesDef/project/project";
import Image from "next/image";
import styled from "styled-components";

type ProjectsScreenProps = {
  fetch: () => Promise<Array<Project>>;
};

const _UsersServices = new UsersServices();

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ fetch }) => {
  const { isLogged } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);

  const [projectsWithUserEmail, setProjectsWithUserEmail] = useState<
    Array<{
      project: Project;
      userEmail: string;
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
          };
        }),
      ).then((updatedProjects) => {
        setProjectsWithUserEmail(updatedProjects);
      });
    }
  }, [projects]);

  return (
    <ProjectsContainer>
      {isLogged ? (
        <Link href="/add-project">
          <DefaultButton type="primary">Add your own project</DefaultButton>
        </Link>
      ) : (
        <ContainerSignup>
          <p>Connectez vous pour ajouter un projet</p>
        </ContainerSignup>
      )}

      <RoundedContainer background="light" padding="36px">
        <MainContainer>
          {projects.length > 0 ? (
            <>
              <Grid>
                {projectsWithUserEmail &&
                  projectsWithUserEmail.map((data, index) => (
                    <RoundedContainer
                      key={index}
                      width="100%"
                      padding="0"
                      height="256px"
                      background="dark"
                      userBar={{
                        username: data.userEmail,
                        project: data.project.name,
                        gap: "10px",
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
              </Grid>
            </>
          ) : (
            <StyledLoading>Chargement ...</StyledLoading>
          )}
        </MainContainer>
      </RoundedContainer>
    </ProjectsContainer>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(auto, 425px));
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(3, minmax(auto, 425px));
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: calc(100% - 100px);
  padding: 0 50px 50px;
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
