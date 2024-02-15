import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectAdvencement: React.FC<{
  progress?: number;
}> = ({ progress = 0 }) => {
  return (
    <ProjectAdvencementContainer className="ProjectAdvencement">
      <p className="card-title">Progression</p>
      <div className="progressbar">
        <div
          className="progressbar__inner"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </ProjectAdvencementContainer>
  );
};

export const ProjectAdvencementContainer = styled(CardContainer)`
  display: flex;
  align-items: center;
  gap: 30px;

  p.card-title {
    margin-bottom: 0;
  }

  .progressbar {
    width: 100%;
    height: 10px;
    background-color: #d9d9d9;
    border-radius: 20px;
    overflow: hidden;

    .progressbar__inner {
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, #a2a2ef 0%, #1f1ef1 100%);
    }
  }
`;
