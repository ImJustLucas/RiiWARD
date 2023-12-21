import { useEffect, useState } from "react";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { UsersServices } from "@services/api/Users";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Avatar from "../assets/images/avatar.png";
import ProjectImage from "../assets/images/projectImage.png";

type ProjectType = {
  category: string | null;
  created_at: string;
  description: string | null;
  id: number;
  image: string | null;
  name: string;
  userId: string;
};

type ProjectsScreenProps = {
  fetch: () => Promise<Array<ProjectType>>;
};

const _UsersServices = new UsersServices();

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ fetch }) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [evenIndexProjects, setEvenIndexProjects] = useState<
    Array<{
      project: ProjectType;
      userEmail: string;
      userAvatar: string | null;
    }>
  >([]);

  const [oddIndexProjects, setOddIndexProjects] = useState<
    Array<{
      project: ProjectType;
      userEmail: string;
      userAvatar: string | null;
    }>
  >([]);

  const [projectsWithUserEmail, setProjectsWithUserEmail] = useState<
    Array<{
      project: ProjectType;
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
          const user = await _UsersServices.getUserById(data.userId);
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
      <Link href="/project/add-project">
        <StyledButton>
          <span>Add your own Project</span>
          <i className="ri-add-line"></i>
        </StyledButton>
      </Link>
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
                        <Backdrop />
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
                <StyledSubtitle>FIND YOUR NEXT FAVORITE PROJECT</StyledSubtitle>
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
                        <Backdrop />
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
            <StyledLoading>Loading ...</StyledLoading>
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
  width: 100%;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.background.dark};
  border-radius: 15px;
  padding: 10px 30px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
  }

  & span {
    color: white;
  }
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

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  z-index: 2;
`;

const StyledLoading = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  width: 100%;
`;
