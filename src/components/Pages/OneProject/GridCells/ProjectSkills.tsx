import { TagSkill } from "@components/Common/Tags/SkillsTag";
import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectSkills: React.FC<{
  skills: string[];
}> = ({ skills }) => {
  return (
    <ProjectSkillsContainer className="ProjectSkills">
      <p className="card-title">Skills</p>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <TagSkill key={index} content={skill} isIcon={false} />
        ))}
      </SkillsContainer>
    </ProjectSkillsContainer>
  );
};

const ProjectSkillsContainer = styled(CardContainer)``;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
