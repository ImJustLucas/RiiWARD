// Import de la composante Image depuis "next/image"
import Image from "next/image";
import styled from "styled-components";

export const ProfileScreen: React.FC = () => {
  return (
    <>
      <LoginContainer>
        <Title>My profil</Title>
        <InfosUserContainer>
          <RowInfosUser>
            {/* Utilisation de la composante Image de next/image */}
            <Image width={200} height={200} src={""} alt="avatar" />
            <InfosUser>
              <p>
                <input type="text" placeholder="Prénom" />
              </p>
              <p>
                <input type="text" placeholder="Nom" />
              </p>
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
  flex-direction: column;
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
