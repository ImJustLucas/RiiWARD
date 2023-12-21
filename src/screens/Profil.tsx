import { useEffect, useState } from "react";
import Avatar from "@assets/images/avatar.png";
import ProjectImage from "@assets/images/projectImage.png";
import { LeftButton } from "@components/Common/Buttons/LeftButton";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { useAuth } from "@contexts/AuthContext";
import { getAllUserProject } from "@services/api/Project";
import { ProjectData } from "@typesDef/project/project";
import Image from "next/image";
import styled from "styled-components";

export const ProfileScreen: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<ProjectData>({
    project: null,
    error: null,
  });

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { project, error } = await getAllUserProject(user?.id as string);
        setProjects({ project, error });
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      }
    };

    getProjects();
  }, []);

  console.log(projects);

  const evenIndexProjects = projects.project?.filter(
    (_, index) => index % 2 === 0,
  );
  const oddIndexProjects = projects.project?.filter(
    (_, index) => index % 2 !== 0,
  );

  return (
    <>
      <ContainerPageProfil>
        <ContainerButton>
          <LeftButton text="Back to home" icon="skip-left" link="/" />
        </ContainerButton>
        <ProfilContainer>
          <Title>My profile</Title>
          <InfosUserContainer>
            <RowInfosUser>
              {/* Utilisation de la composante Image de next/image */}
              <Image width={200} height={140} src={""} alt="avatar" />
              <InfosUser>
                <InputProfile type="text" placeholder="First name" />
                <InputProfile type="text" placeholder="Last name" />
              </InfosUser>
            </RowInfosUser>
            <InfosUser>
              <InputDesc type="text" placeholder="Description" />
              <InputDesc type="text" placeholder="Cursus" />
            </InfosUser>
          </InfosUserContainer>
        </ProfilContainer>
        <ContainerProjectProfil>
          <Title>My projects</Title>
          <RoundedContainer width="100%" background="light" padding="36px">
            <MainContainer>
              <Column>
                {evenIndexProjects?.map((project, index) => (
                  <RoundedContainer
                    key={index}
                    width="100%"
                    link="#"
                    padding="0"
                    height="378px"
                    background="dark"
                    userBar={{
                      avatar: Avatar,
                      username: project.name,
                      project: project.description,
                      gap: "16px",
                      positionx: "left",
                    }}
                  >
                    <ImageContainer>
                      <Backdrop />
                      <Image src={ProjectImage} alt="Image" />
                    </ImageContainer>
                  </RoundedContainer>
                ))}
              </Column>
              <Column>
                <StyledSubtitle>FIND YOUR NEXT FAVORITE PROJECT</StyledSubtitle>
                {oddIndexProjects?.map((project, index) => (
                  <RoundedContainer
                    key={index}
                    width="100%"
                    link="#"
                    padding="0"
                    height="378px"
                    background="dark"
                    userBar={{
                      avatar: Avatar,
                      username: project.name,
                      project: project.description,
                      gap: "16px",
                      positionx: "left",
                    }}
                  >
                    <ImageContainer>
                      <Backdrop />
                      <Image src={ProjectImage} alt="Image" />
                    </ImageContainer>
                  </RoundedContainer>
                ))}
              </Column>
            </MainContainer>
          </RoundedContainer>
        </ContainerProjectProfil>
      </ContainerPageProfil>
    </>
  );
};

const ProfilContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 50px;
`;

const ContainerPageProfil = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;
  width: max-content;
`;

const ContainerProjectProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InfosUserContainer = styled.div`
  border: 1px solid white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 65px 50px;
  background-color: white;
`;

const RowInfosUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & img {
    background-color: black;
    border-radius: 50%;
  }
`;

const InfosUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const InputProfile = styled.input`
  padding: 16px 40px;
  margin: 10px 0px;
  border-radius: 24px;
  color: black;
  border: 1px solid black;
`;

const InputDesc = styled.input`
  width: 75%;
  padding: 16px 40px;
  margin: 10px 0px;
  border-radius: 24px;
  border: 1px solid black;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.desktop.title};
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
  font-weight: 500;
  color: black;
  position: relative;
  text-transform: uppercase;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;

const StyledSubtitle = styled.h2`
  text-align: right;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-top: 24px;
  font-size: ${({ theme }) => theme.size.title};
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

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`;
