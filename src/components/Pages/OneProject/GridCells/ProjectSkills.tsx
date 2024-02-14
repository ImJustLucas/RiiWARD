import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectSkills: React.FC = () => {
  return (
    <ProjectSkillsContainer className="ProjectSkills">
      <p className="card-title">Skills</p>
    </ProjectSkillsContainer>
  );
};

const ProjectSkillsContainer = styled(CardContainer)``;
