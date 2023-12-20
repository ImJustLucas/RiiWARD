import styled from "styled-components";

export type TextHeaderProps = {
  title: string;
  desc?: string;
};

export const TextHeader: React.FC<TextHeaderProps> = ({ title, desc }) => {
  return (
    <HeaderText>
      <TitleContainer>
        <h2>{title}</h2>
      </TitleContainer>
      {desc && (
        <DescContainer>
          <p>{desc}</p>
        </DescContainer>
      )}
    </HeaderText>
  );
};

const HeaderText = styled.div`
  padding: 0px 15px;
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
  padding-bottom: 32px;
`;
