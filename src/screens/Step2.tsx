import { LeftButton } from "@components/LeftButton";
import { RightButton } from "@components/RightButton";
import { StepBackground } from "@components/StepBackground";
import styled from "styled-components";

export const Step2: React.FC = () => {
  return (
    <>
      <StepBackground />
      <HomeContainer>
        <Title>Now it is better with a cover no ?</Title>
        <Actions>
          <LeftButton text="Back" icon="skip-left" link="/"></LeftButton>
          <RightButton text="Next" icon="skip-right" link="/"></RightButton>
        </Actions>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 2;

  &::after {
    content: "🤩";
    position: absolute;
    right: -20px;
    top: -25px;
    transform: rotate(20deg);
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
