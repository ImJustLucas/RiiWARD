import { DefaultButton } from "@components/Common/Buttons/DefaultButton";
import { ExempleApp } from "@components/Pages/Homepage/ExempleApp";
import { Footer } from "@components/Pages/Homepage/Footer";
import { Hero } from "@components/Pages/Homepage/HeroContainer";
import { TitleContainer } from "@styles/typos";
import styled from "styled-components";

export const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <ExempleApp />
      <TitleContainer>
        Les projets les plus <span className="electric-blue">populaires</span>
      </TitleContainer>
      <DefaultButton type="primary" href="/projects">
        Découvrir tout les projets
      </DefaultButton>
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
