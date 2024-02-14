import { useAuth } from "@contexts/AuthContext";
import { AuthServices } from "@services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

type StyledLinkProps = {
  href: string;
};

const _AuthServices = new AuthServices();

export const Header: React.FC = () => {
  const { isLogged, setUser, setIsLogged } = useAuth();

  const handleSignOut = async () => {
    const user = await _AuthServices.signOut();
    setUser(null);
    setIsLogged(false);
    console.log("@POST: signout", user);
  };

  return (
    <NavigationContainer>
      <HeaderContainer>
        <TitleContainer>
          <Link href="/">
            R<span>ii</span>ward
          </Link>
        </TitleContainer>
        <RoundedContainer>
          <LinksContainer>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href="/About">About</StyledLink>
            <StyledLink href="/users/me">Me</StyledLink>
          </LinksContainer>
        </RoundedContainer>
        <div>
          {isLogged ? (
            <StyledSignin href="" onClick={handleSignOut}>
              Sign Out
              <i className="ri-arrow-right-up-line"></i>
            </StyledSignin>
          ) : (
            <StyledSignin href="/auth/signin">
              Sign in <i className="ri-arrow-right-up-line"></i>
            </StyledSignin>
          )}
        </div>
      </HeaderContainer>
    </NavigationContainer>
  );
};

const HeaderContainer = styled.div`
  height: 100px;
  color: #000000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: fit-content;
  font-size: 40px;
  font-family: "Space Grotesk", sans-serif;
  text-transform: uppercase;
  text-align: start;

  & a {
    font-size: 40px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500;
    color: black;
  }

  & span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 0px 15px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  color: #737373;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  color: ${({ href }) => {
    const { asPath } = useRouter();
    return asPath === href ? "blue" : "#737373";
  }};
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledSignin = styled(Link)`
  background-color: black;
  color: white;
  padding: 8px 24px;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  max-width: fit-content;
  display: flex;
  gap: 12px;
`;

const RoundedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;
  text-align: center;
  padding: 10px 20px;
`;
