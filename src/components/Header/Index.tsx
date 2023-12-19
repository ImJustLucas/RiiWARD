import { TextHeader } from "@components/Header/ContainerText.tsx";
import Link from "next/link";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <RoundedContainer>
      <HeaderContainer>
        <LogoContainer>LOGO</LogoContainer>
        <LinksContainer>
          <StyledLink href="" target="_blank">
            Projets
          </StyledLink>
          <StyledLink href="" target="_blank">
            Classement
          </StyledLink>
          <StyledLink href="" target="_blank">
            Profil
          </StyledLink>
        </LinksContainer>

        <ButtonContainer>
          <StyledSignin href="" target="_blank">
            Sign in
          </StyledSignin>
        </ButtonContainer>
      </HeaderContainer>
      <TextHeader />
    </RoundedContainer>
  );
};

const HeaderContainer = styled.div`
  height: 100px;
  background-color: white;
  border-radius: 10px;
  color: #000000;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

const LogoContainer = styled.div`
  font-size: 40px;
  font-family: "Space Grotesk", sans-serif;
`;

const LinksContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div``;

const StyledSignin = styled(Link)`
  background-color: black;
  color: white;
  padding: 16px 24px;
  border-radius: 15px;
  font-size: 24px;
  cursor: pointer;
`;

const StyledLink = styled.div`
  padding: 0px 15px;
  font-size: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
`;

const RoundedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
`;
