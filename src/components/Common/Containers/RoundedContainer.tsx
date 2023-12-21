import Link from "next/link";
import styled from "styled-components";

import { UserBar, UserBarProps } from "../Bars/UserBar";

type RoundedContainerProps = {
  children?: React.ReactNode;
  background?: "light" | "dark";
  link?: string;
  width?: string;
  height?: string;
  padding?: string;
  userBar?: UserBarProps;
  customStyles?: string;
};

export const RoundedContainer: React.FC<RoundedContainerProps> = ({
  children,
  background = "light",
  link,
  width = "auto",
  height = "auto",
  padding = "24px",
  userBar,
  customStyles,
}) => {
  return (
    <RoundedContainerDiv
      background={background}
      width={width}
      height={height}
      padding={padding}
      customStyles={customStyles}
    >
      {link && (
        <LinkContainer>
          <Link href={`${link}`}>
            <Button>
              <i className="ri-link"></i>
            </Button>
          </Link>
        </LinkContainer>
      )}
      {children}
      {userBar && (
        <UserBar
          username={userBar.username}
          avatar={userBar.avatar}
          project={userBar.project}
          gap={userBar.gap}
          positionx={userBar.positionx}
        ></UserBar>
      )}
    </RoundedContainerDiv>
  );
};

const RoundedContainerDiv = styled.div<{
  background?: "light" | "dark";
  width?: string;
  height?: string;
  padding?: string;
  customStyles?: string;
}>`
  border-radius: 24px;
  padding: ${({ padding }) => padding};
  position: relative;
  background: ${({ theme, background }) =>
    background === "light"
      ? theme.colors.background.light
      : theme.colors.background.dark};
  width: ${({ width }) => width};
  color: ${({ background }) => (background === "light" ? "black" : "white")};
  height: ${({ height }) => height};
  box-sizing: border-box;
  display: flex;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }

  ${({ customStyles }) => customStyles};
`;

const LinkContainer = styled.div`
  position: absolute;
  z-index: 10;
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
    rotate: 45deg;
    font-size: 24px;
    color: white;
  }
`;
