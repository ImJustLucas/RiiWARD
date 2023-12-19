import Image from "next/image";
import styled from "styled-components";

export const LoginScreen: React.FC = () => {
  return (
    <>
      <LoginContainer>
        <Title>My profil</Title>
        <InfosUserContainer>
          <RowInfosUser>
            <Image
              src={
                "https://gravatar.com/avatar/464e9786f7c2f552b708e4ff87d4c5e9?s=200&d=retro&r=x"
              }
              alt="avatar"
            />
            <InfosUser>
              <p>Nom</p>
              <p>Prénom</p>
            </InfosUser>
          </RowInfosUser>
          <InfosUser>
            <p>description</p>
            <p>Axe</p>
          </InfosUser>
        </InfosUserContainer>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 50px;
`;

const InfosUserContainer = styled.div`
  border: 1px solid;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 65px 50px;
`;

const RowInfosUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfosUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.desktop.title};
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
