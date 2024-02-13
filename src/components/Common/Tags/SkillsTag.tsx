import styled from "styled-components";

type SkillTagProps = {
  content: string;
  icon?: string;
  isIcon: boolean;
};

export const TagSkill: React.FC<SkillTagProps> = ({
  content,
  icon,
  isIcon,
}) => {
  return (
    <SkillTag>
      {content} {isIcon ? <i className={icon}></i> : null}
    </SkillTag>
  );
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
