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
              <InputProfile type="text" placeholder="Prénom" />
              <InputProfile type="text" placeholder="Nom" />
            </InfosUser>
          </RowInfosUser>
          <InfosUser>
            <InputDesc type="text" placeholder="Description" />
            <InputDesc type="text" placeholder="Cursus" />
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
  border: 1px solid white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 65px 50px;
  background-color: white;
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

const InputProfile = styled.input`
  padding: 16px 40px;
  margin: 10px 0px;
  border-radius: 24px;
  color: black;
  border: 1px solid black;
`;

const InputDesc = styled.input`
  width: 75%;
  padding: 16px 40px;
  margin: 10px 0px;
  border-radius: 24px;
  border: 1px solid black;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.desktop.title};
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
  font-weight: 500;
  color: black;
  position: relative;
  text-transform: uppercase;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
