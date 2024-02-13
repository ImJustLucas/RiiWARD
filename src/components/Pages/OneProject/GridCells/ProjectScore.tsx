import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectScore: React.FC<{ score: number | string }> = ({
  score,
}) => {
  return (
    <ProjectScoreContainer className="ProjectScore">
      <p className="card-title">Votes</p>
      <p className="score">{score}</p>
    </ProjectScoreContainer>
  );
};

const ProjectScoreContainer = styled(CardContainer)`
  min-height: 167px;
  background-color: ${({ theme }) => theme.colors.primary};

  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    &.score {
      font-size: 48px;
      font-weight: 700;
      margin-top: 40px;
    }
  }
`;
