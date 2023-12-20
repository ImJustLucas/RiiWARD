import styled from "styled-components";

export const TextHeader: React.FC = () => {
  return (
    <HeaderText>
      <TitleContainer>
        <h2>bring visibility to your project</h2>
      </TitleContainer>
      <DescContainer>
        <p>
          Transformez les projets académiques en succès professionnels : votre
          plateforme pour l&apos;excellence étudiante.
        </p>
      </DescContainer>
    </HeaderText>
  );
};

const HeaderText = styled.div`
  padding: 0px 15px 50px 15px;
  font-size: 24px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  font-size: 48px;
  text-transform: uppercase;
  padding: 32px 0px 32px 0px;
  font-family: "Space Grotesk", sans-serif;
`;

const DescContainer = styled.div`
  width: 70%;
  margin: auto;
  font-size: 24px;
`;
