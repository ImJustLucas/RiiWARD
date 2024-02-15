import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectPreview: React.FC<{
  preview?: string;
}> = ({ preview }) => {
  console.log("ProjectPreview", preview);
  return (
    <ProjectPreviewContainer className="ProjectPreview">
      <div
        className="project-preview-img"
        style={{
          backgroundImage: preview
            ? `url(${preview})`
            : `url(https://picsum.photos/seed/${Math.random()}/800/600)`,
        }}
      ></div>
    </ProjectPreviewContainer>
  );
};

const ProjectPreviewContainer = styled(CardContainer)`
  background-color: ${({ theme }) => theme.colors.primary};

  .project-preview-img {
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
  }
`;
