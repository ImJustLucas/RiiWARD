import Link from "next/link";
import styled from "styled-components";

type RoundedContainerProps = {
  children: React.ReactNode;
  background?: "light" | "dark";
  link?: string;
  width?: string;
};

export const RoundedContainer: React.FC<RoundedContainerProps> = ({
  children,
  background = "light",
  link,
  width = "auto",
}) => {
  return (
    <RoundedContainerDiv background={background} width={width}>
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
    </RoundedContainerDiv>
  );
};

const RoundedContainerDiv = styled.div<{
  background?: "light" | "dark";
  width?: string;
}>`
  border-radius: 24px;
  padding: 24px;
  position: relative;
  background: ${(props) =>
    props.background === "light"
      ? props.theme.colors.background.primary
      : props.theme.colors.background.secondary};
  width: ${(props) => props.width};
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
    rotate: 45deg;
    font-size: 24px;
    color: white;
  }
`;
