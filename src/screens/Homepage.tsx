import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Avatar from "../assets/images/avatar.png";
import HomeImage from "../assets/images/homeImage.png";
import ProjectImage from "../assets/images/projectImage.png";
import Wand from "../assets/images/wand.png";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <SectionContainer>
          <RoundedContainer
            background="dark"
            width="50%"
            height="402px"
            padding="50px"
          >
            <StyledSubtitle>
              <h2>VOTE FOR THE PROJECT OF THE MONTH</h2>
            </StyledSubtitle>
          </RoundedContainer>
          <RoundedContainer width="50%" height="402px" padding="50px">
            <StyledSubtitle>
              <h2>ADD YOUR PROJECT AND SHARE IT WITH THE OTHER STUDENT</h2>
            </StyledSubtitle>
          </RoundedContainer>
        </SectionContainer>
        <SectionContainer>
          <RoundedContainer
            width="33%"
            padding="24px 24px 0 24px"
            height="467px"
          >
            <Column>
              <h3>
                CHECK THE PROJECT OF THE MONTH{" "}
                <StyledWand src={Wand} alt="Wand" />
              </h3>
              <i className="ri-arrow-right-double-fill"></i>
              <Image src={HomeImage} alt="Test" loading="lazy" />
            </Column>
          </RoundedContainer>
          <RoundedContainer
            width="66%"
            padding="0"
            background="dark"
            link="#"
            height="467px"
            userBar={{
              avatar: Avatar,
              username: "Hassina",
              project: "Awwwwards",
              gap: "100px",
              positionx: "right",
            }}
          >
            <ImageContainer>
              <Backdrop />
              <Image src={ProjectImage} alt="Image" />
            </ImageContainer>
          </RoundedContainer>
        </SectionContainer>
        <Link href="/projects">
          <StyledButton>
            <span>Wanna see more projects ?</span>
            <i className="ri-arrow-right-up-line"></i>
          </StyledButton>
        </Link>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const SectionContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.size.extraTitle};
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & h3 {
    font-size: ${({ theme }) => theme.size.title};
    font-weight: 500;
    text-align: center;
    font-family: "Inter", sans-serif;
  }

  & i {
    font-size: ${({ theme }) => theme.size.title};
  }
`;

const StyledWand = styled(Image)`
  width: ${({ theme }) => theme.size.title};
  height: ${({ theme }) => theme.size.title};
`;

const StyledButton = styled.button`
  display: flex;
  padding: 14px 32px;
  gap: 20px;
  background: ${({ theme }) => theme.colors.background.dark};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.background.dark};
  transition: 0.3s ease-in-out;
  align-items: center;
  cursor: pointer;

  & span {
    font-size: ${({ theme }) => theme.size.large};
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: white;
  }

  & i {
    color: white;
    font-size: ${({ theme }) => theme.size.medium};
  }

  &:hover {
    transform: scale(1.05);
  }
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
