import { FC } from "react";
import { AuthProvider } from "@contexts/AuthContext";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element | string | string[];
};

export const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <AppLayoutContainer>
      <AuthProvider>{children}</AuthProvider>
    </AppLayoutContainer>
  );
};

const AppLayoutContainer = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  // background: ${({ theme }) => theme.colors.background.primary};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;
`;
