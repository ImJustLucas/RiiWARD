import { useEffect, useState } from "react";
import ProjectImage from "@assets/images/projectImage.png";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { Icon } from "@components/Icon";
import { UsersServices } from "@services/api/Users";
import { Project } from "@typesDef/project/project";
import Image from "next/image";
import styled from "styled-components";

type ProjectsSwiperProps = {
  fetch: () => Promise<Array<Project>>;
};

const _UsersServices = new UsersServices();

export const ProjectsSwiper: React.FC<ProjectsSwiperProps> = ({ fetch }) => {
  const [projects, setProjects] = useState<Project[]>([]);

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

  return (
    <ProjectsSwiperContainer>
      {projectsWithUserEmail &&
        projectsWithUserEmail.map((data, index) => (
          <RoundedContainer
            width="360px"
            padding="10px"
            key={index}
            customStyles={containerStyle}
          >
            <RoundedContainer width="100%" padding="10px" background="dark">
              <ImageContainer>
                <Image
                  src={data.project.image ? data.project.image : ProjectImage}
                  alt={data.project.name}
                  layout="fill"
                />
              </ImageContainer>
            </RoundedContainer>
            <ProjectContainer>
              <ProjectTitle>{data.project.name}</ProjectTitle>
              <ProjectUser>{data.userEmail}</ProjectUser>
              <ProjectVote>
                30
                <i className="ri-hearts-line is-active"></i>
                {/*<i className="ri-hearts-fill is-active"></i>*/}
              </ProjectVote>
              <ProjectDescription>
                {data.project.description}
              </ProjectDescription>
              <ProjectLink>
                <Icon icon="arrow" />
              </ProjectLink>
            </ProjectContainer>
          </RoundedContainer>
        ))}
    </ProjectsSwiperContainer>
  );
};

const containerStyle = `
  flex-direction: column;
  gap: 16px;
`;

const ProjectsSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "title vote"
    "user vote"
    "description description"
    "cta cta";
  font-size: 16px;
`;

const ProjectTitle = styled.div`
  grid-area: title;
  font-size: 20px;
  color: #1f1ef1;
`;

const ProjectUser = styled.div`
  grid-area: user;
  font-weight: bold;
`;

const ProjectVote = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-end;
  grid-area: vote;
  font-weight: bold;
  line-height: 24px;
  text-align: right;

  i {
    display: none;
    visibility: hidden;

    &.is-active {
      height: 24px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;
      color: #1f1ef1;
    }
  }
`;

const ProjectDescription = styled.div`
  margin-top: 4px;
  grid-area: description;
`;

const ProjectLink = styled.a`
  margin: 0 auto;
  margin-top: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  grid-area: cta;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.dark};
  transition:
    background 0.5s ease-in-out,
    border-radius 0.5s ease-in-out,
    width 0.5s ease-in-out;

  &:hover {
    background: #1f1ef1;
    border-radius: 25px;
    width: 100%;
  }
  svg {
    height: 24px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 24px;
  }
`;
