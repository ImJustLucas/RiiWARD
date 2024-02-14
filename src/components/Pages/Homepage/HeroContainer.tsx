import { DefaultButton } from "@components/Common/Buttons/DefaultButton";
import { H1Container, Subtitle } from "@styles/typos";
import styled from "styled-components";

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <H1Container>
        Mettez en <span className="electric-blue">lumière</span>
        <br /> vos projets académiques
      </H1Container>
      <Subtitle>
        Transformez vos projets académiques en réussite professionnelle :
        <br />
        votre plateforme d’excellence étudiante.
      </Subtitle>
      <ActionContainer>
        <DefaultButton type="primary">Découvrir tout les projets</DefaultButton>
        <DefaultButton type="primary" bordered>
          Se créer un compte
        </DefaultButton>
      </ActionContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  text-align: center;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
