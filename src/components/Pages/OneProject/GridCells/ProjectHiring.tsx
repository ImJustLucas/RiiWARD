import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectHiring: React.FC<{
  isHiring: boolean;
}> = ({ isHiring = false }) => {
  return (
    <ProjectHiringContainer className="ProjectHiring">
      <p className="card-title">Ce projet recrute ?</p>
      <p className="icon">
        {isHiring ? (
          <i className="ri-check-line" />
        ) : (
          <i className="ri-check-close" />
        )}
      </p>
    </ProjectHiringContainer>
  );
};

const ProjectHiringContainer = styled(CardContainer)`
  p {
    text-align: center;
    &.icon {
      font-size: 48px;
      margin-top: 40px;
    }
  }
`;
