import { LeftButton } from "@components/Common/Buttons/LeftButton";
import { RightButton } from "@components/Common/Buttons/RightButton";
import { Icon } from "@components/Icon";
import { StepBackground } from "@components/StepBackground";
import styled from "styled-components";

type AddCoverProjectProps = {
  step: {
    get: number;
    set: (newStep: number) => void;
  };
};

export const AddCoverProject: React.FC<AddCoverProjectProps> = ({ step }) => {
  return (
    <>
      <StepBackground />
      <HomeContainer>
        <Title>Now it is better with a cover no ?</Title>
        <InputContainer>
          <Label htmlFor="cover">
            <Icon icon="plus" />
          </Label>
          <Input type="file" id="cover" name="cover" accept="image/png" />
        </InputContainer>

        <Actions>
          <div>
            <LeftButton
              text="Back"
              icon="skip-left"
              link="#"
              onClick={() => step.set(step.get - 1)}
            ></LeftButton>
          </div>
          <div>
            <RightButton
              text="Next"
              icon="skip-right"
              link="#"
              onClick={() => step.set(step.get + 1)}
            ></RightButton>
          </div>
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

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 50vw;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;

const InputContainer = styled.div`
  border-radius: 24px;
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 300px;
    height: 200px;
  }
`;

const Label = styled.label`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 65px;
    height: 65px;
  }
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    width: 30%;
  }
`;
