import styled from "styled-components";

export const StepBackground: React.FC = () => {
  return (
    <>
      <StepContainer>
        <TopRightImage
          src="https://img.freepik.com/photos-premium/memoji-homme-heureux-fond-blanc-emoji_826801-6840.jpg?w=2000"
          alt=""
        />
        <BottomLeftImage
          src="https://img.freepik.com/photos-premium/memoji-homme-heureux-fond-blanc-emoji_826801-6840.jpg?w=2000"
          alt=""
        />
      </StepContainer>
    </>
  );
};

const StepContainer = styled.div`
  z-index: -1;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightgrey};
`;

const TopRightImage = styled.img`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 240px;
  height: 240px;
`;

const BottomLeftImage = styled.img`
  position: absolute;
  bottom: 15%;
  left: 10%;
  width: 240px;
  height: 240px;
`;
