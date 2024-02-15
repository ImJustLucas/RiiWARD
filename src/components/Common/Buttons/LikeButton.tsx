import styled from "styled-components";

export const LikeButton: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <LikeButtonContainer className="LikeButton" onClick={onClick}>
      <i className="ri-hearts-line" />
    </LikeButtonContainer>
  );
};

const LikeButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 64px;
  height: 64px;

  i {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    cursor: pointer;
  }
`;
