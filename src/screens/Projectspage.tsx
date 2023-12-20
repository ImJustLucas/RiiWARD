import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Avatar from "../assets/images/homeAvatar.jpg";
import ProjectImage from "../assets/images/projectImage.png";

export const ProjectsScreen: React.FC = () => {
  const projects = Array(3).fill(null);
  return (
    <ProjectsContainer>
      <Link href="#">
        <StyledButton>
          <span>Add you own Project</span>
          <i className="ri-add-line"></i>
        </StyledButton>
      </Link>
      <RoundedContainer width="100%" background="light" padding="36px">
        <MainContainer>
          <Column>
            {projects.map((_, index) => (
              <RoundedContainer
                key={index}
                width="100%"
                link="#"
                padding="0"
                height="378px"
                background="dark"
                userBar={{
                  avatar: Avatar,
                  username: "Hassina",
                  project: "Awwwwards",
                  gap: "100px",
                  positionX: "left",
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
            {projects.map((_, index) => (
              <RoundedContainer
                key={index}
                width="100%"
                link="#"
                padding="0"
                height="378px"
                background="dark"
                userBar={{
                  avatar: Avatar,
                  username: "Hassina",
                  project: "Awwwwards",
                  gap: "100px",
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
`;
