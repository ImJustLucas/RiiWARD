import { AvatarRounded } from "@components/Common/Avatar";
import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectContributors: React.FC = () => {
  return (
    <ProjectContributorsContainer className="ProjectContributors">
      <p className="card-title">Collaborateurs</p>
      <div className="contributors-list">
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
        <AvatarRounded src="https://i.pravatar.cc/150" alt="Avatar" size={30} />
      </div>
    </ProjectContributorsContainer>
  );
};

const ProjectContributorsContainer = styled(CardContainer)`
  .contributors-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }
`;
