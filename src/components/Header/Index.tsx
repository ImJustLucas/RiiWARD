import { TextHeader, TextHeaderProps } from "@components/Header/ContainerText";
import { useAuth } from "@contexts/AuthContext";
import { AuthServices } from "@services/api";
import Link from "next/link";
import styled from "styled-components";

type HeaderProps = {
  textHeader?: TextHeaderProps;
};

const _AuthServices = new AuthServices();

export const Header: React.FC<HeaderProps> = ({ textHeader }) => {
  const { isLogged, setUser, setIsLogged } = useAuth();

  const handleSignOut = async () => {
    const user = await _AuthServices.signOut();
    setUser(null);
    setIsLogged(false);
    console.log("@POST: signout", user);
  };

  return (
    <RoundedContainer>
      <HeaderContainer>
        <LogoContainer>
          <Link href="/">LOGO</Link>
        </LogoContainer>
        <LinksContainer>
          <StyledLink href="/projects">Projects</StyledLink>
          <StyledLink href="">Ranking</StyledLink>
          <StyledLink href="/profile">Profile</StyledLink>
        </LinksContainer>

        <ButtonContainer>
          {isLogged ? (
            <StyledSignin href="" onClick={handleSignOut}>
              Sign Out
            </StyledSignin>
          ) : (
            <StyledSignin href="/signin">Sign in</StyledSignin>
          )}
        </ButtonContainer>
      </HeaderContainer>
      {textHeader && (
        <TextHeader title={textHeader.title} desc={textHeader?.desc} />
      )}
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

  & a {
    color: black;
  }
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

const StyledLink = styled(Link)`
  padding: 0px 15px;
  font-size: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  color: black;
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
