import styled from "styled-components";

type SkillTagProps = {
  content: string;
};

export const TagSkill: React.FC<SkillTagProps> = ({ content }) => {
  return <SkillTag>{content}</SkillTag>;
};

const SkillTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  gap: 10px;
  border: 2px solid ${({ theme }) => theme.colors.electricBlue};
  border-radius: 24px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;
