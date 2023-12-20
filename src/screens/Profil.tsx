import { LeftButton } from "@components/Common/Buttons/LeftButton";
import Image from "next/image";
import styled from "styled-components";

export const ProfileScreen: React.FC = () => {
  return (
    <>
      <ContainerPageProfil>
        <ContainerButton>
          <LeftButton text="Back to home" icon="skip-left" link="/" />
        </ContainerButton>
        <ProfilContainer>
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
        </ProfilContainer>
        <ContainerProjectProfil>
          <Title>My projects</Title>
        </ContainerProjectProfil>
      </ContainerPageProfil>
    </>
  );
};

const ProfilContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 50px;
`;

const ContainerPageProfil = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;
  width: max-content;
`;

const ContainerProjectProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
