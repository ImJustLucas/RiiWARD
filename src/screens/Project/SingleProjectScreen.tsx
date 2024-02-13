import {
  LikeBtnCell,
  ProjectAdvencement,
  ProjectContributors,
  ProjectDescription,
  ProjectHiring,
  ProjectName,
  ProjectPreview,
  ProjectScore,
  ProjectSkills,
} from "@components/Pages/OneProject/GridCells";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type SingleProjectProps = {
  data: Project;
};

export const SingleProjectScreen: React.FC<SingleProjectProps> = ({ data }) => {
  return (
    <GridParent>
      <ProjectPreview />
      <ProjectName name={data.name as string} />
      <ProjectScore score={data.score || 45} />
      <ProjectDescription
        socialLinks={{
          github: "https://github.com/ImJustLucas/RiiWARD",
          discord: "https://discord.gg/BdTUKgF5NW",
          website: "projet-awwward.vercel.app",
        }}
      />
      <ProjectContributors />
      <ProjectSkills />
      <LikeBtnCell />
      <ProjectHiring isHiring />
      <ProjectAdvencement />
    </GridParent>
  );
};

const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  .ProjectPreview {
    grid-area: 1 / 1 / 7 / 7;
  }
  .ProjectName {
    grid-area: 1 / 7 / 4 / 13;
  }
  .ProjectHiring {
    grid-area: 7 / 1 / 10 / 3;
  }
  .ProjectContributors {
    grid-area: 7 / 3 / 10 / 5;
  }
  .ProjectSkills {
    grid-area: 7 / 5 / 13 / 7;
  }
  .LikeBtn {
    grid-area: 10 / 3 / 13 / 5;
  }
  .ProjectScore {
    grid-area: 10 / 1 / 13 / 3;
  }
  .ProjectAdvencement {
    grid-area: 11 / 7 / 13 / 13;
  }
  .ProjectDescription {
    grid-area: 4 / 7 / 11 / 13;
  }
`;
