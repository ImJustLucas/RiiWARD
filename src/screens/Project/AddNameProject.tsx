import { RightButton } from "@components/RightButton";
import styled from "styled-components";

export const AddNameProject: React.FC = () => {
  return (
    <>
      <ContainerPage>
        <ContainerAddProject>
          <Title>Give your project a name</Title>
          <ContainerInput>
            <InputName type="text" placeholder="Project name" />
          </ContainerInput>
          <ContainerButton>
            <RightButton text="Next" icon="skip-right" link="#" />
          </ContainerButton>
        </ContainerAddProject>
      </ContainerPage>
    </>
  );
};

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f6f7;
  text-align: center;
`;

const ContainerAddProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 60%;
  height: 60%;
`;

const InputName = styled.input`
  border: none;
  background: #f5f6f7;
  font-size: 32px;
  text-align: center;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const ContainerButton = styled.div`
  width: 70%;
`;

const ContainerInput = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.size.desktop.title};
  text-align: center;
  font-weight: 400;
  position: relative;
  z-index: 2;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
