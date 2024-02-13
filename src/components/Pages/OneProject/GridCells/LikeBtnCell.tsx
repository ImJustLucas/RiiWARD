import { LikeButton } from "@components/Common/Buttons/LikeButton";
import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const LikeBtnCell: React.FC = () => {
  return (
    <LikeBtnContainer className="LikeBtn">
      <p className="card-title">Vous aimez ?</p>
      <LikeButton onClick={() => console.log("Like")} />
    </LikeBtnContainer>
  );
};

const LikeBtnContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .LikeButton {
    margin-top: 24px;
  }
`;
