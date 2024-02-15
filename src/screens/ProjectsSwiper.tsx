/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useEffect, useState } from "react";
import ProjectImage from "@assets/images/projectImage.png";
import { DefaultButton } from "@components/Common/Buttons/DefaultButton";
import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import { UsersServices } from "@services/api/Users";
import { Project } from "@typesDef/project/project";
import Image from "next/image";
import styled from "styled-components";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

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

  // const swiperRef = useRef(null);

  useEffect(() => {
    register();

    // const params = {
    //   autoplay: {
    //     delay: 5000,
    //     pauseOnMouseEnter: true,
    //     reverseDirection: true,
    //   },
    //   centeredSlides: true,
    //   breakpoints: {
    //     slidesPerView: 1,
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 8,
    //     },
    //     1024: {
    //       slidesPerView: 2.8,
    //       spaceBetween: 20,
    //     },
    //     1224: {
    //       slidesPerView: 3.2,
    //       spaceBetween: 20,
    //     },
    //     1824: {
    //       slidesPerView: 3,
    //       spaceBetween: 180,
    //     },
    //   },
    // };
    //@ts-ignore

    // Object.assign(swiperRef.current, params);

    //@ts-ignore
    // swiperRef.current.initialize();
  }, []);

  return (
    <ProjectsSwiperContainer>
      <SwiperContainer spaceBetween={50} slidesPerView={3}>
        {projectsWithUserEmail &&
          projectsWithUserEmail.map((data, index) => (
            <SwiperSlide key={index}>
              <RoundedContainer
                width="360px"
                padding="10px"
                key={index}
                customStyles={containerStyle}
              >
                <RoundedContainer width="100%" padding="10px" background="dark">
                  <ImageContainer>
                    <Image
                      src={
                        data.project.image ? data.project.image : ProjectImage
                      }
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
                  <DefaultButton
                    type="primary"
                    href={`/projects/${data.project.id}`}
                  >
                    {" "}
                  </DefaultButton>
                </ProjectContainer>
              </RoundedContainer>
            </SwiperSlide>
          ))}
      </SwiperContainer>
    </ProjectsSwiperContainer>
  );
};

const SwiperContainer = styled(Swiper)`
  width: 100vw;
  margin: 0 -100px;
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 1440px;
  }

  .swiper-wrapper {
    display: flex;
    gap: 24px;
  }
`;

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

  a {
    grid-area: cta;
    margin-top: 16px;
  }
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
