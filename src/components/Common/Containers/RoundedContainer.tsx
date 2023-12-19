import Link from "next/link";
import styled from "styled-components";

type RoundedContainerProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
  link?: string;
  sizeX?: string;
};

const colors = {
  light: "#ffffff",
  dark: "#000000",
};

export const RoundedContainer: React.FC<RoundedContainerProps> = ({
  children,
  theme = "light",
  link,
  sizeX = "auto",
}) => {
  return (
    <RoundedContainerDiv
      style={{
        backgroundColor: colors[theme],
        width: sizeX,
      }}
    >
      {link && (
        <LinkContainer>
          <Link href={`${link}`}>
            <Button>
              <i
                className="ri-link"
                style={{ color: "white", fontSize: "24px", rotate: "45deg" }}
              ></i>
            </Button>
          </Link>
        </LinkContainer>
      )}
      {children}
    </RoundedContainerDiv>
  );
};

const RoundedContainerDiv = styled.div`
  border-radius: 24px;
  padding: 24px;
  position: relative;
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 32px;
  background: white;
  height: 48px;
  width: 48px;
  border-bottom-left-radius: 47px;
  border-bottom-right-radius: 47px;
  display: flex;
  justify-content: center;
  align-items: end;
  transition: 0.3s ease-in-out;
  padding-bottom: 4px;
  box-sizing: border-box;

  &:hover {
    height: 80px;
  }
`;

const Button = styled.button`
  background: black;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transform: rotate(-45deg);

  & i {
    transition: 0.3s ease-in-out;
  }
`;
