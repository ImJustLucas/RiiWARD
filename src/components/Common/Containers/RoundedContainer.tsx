import styled from "styled-components";

type RoundedContainerProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
};

const colors = {
  light: "#ffffff",
  dark: "#000000",
};

export const RoundedContainer: React.FC<RoundedContainerProps> = ({
  children,
  theme = "light",
}) => {
  return (
    <RoundedContainerDiv
      style={{
        backgroundColor: colors[theme],
      }}
    >
      {children}
    </RoundedContainerDiv>
  );
};

const RoundedContainerDiv = styled.div`
  border-radius: 24px;
  padding: 16px;
`;
