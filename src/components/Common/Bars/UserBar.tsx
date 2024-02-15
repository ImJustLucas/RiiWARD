import styled from "styled-components";

export type UserBarProps = {
  username: string;
  project: string;
  gap?: string;
  positionx?: "left" | "right";
};

export const UserBar: React.FC<UserBarProps> = ({
  username,
  project,
  gap = "8px",
  positionx = "right",
}) => {
  return (
    <UserBarContainer gap={gap} positionx={positionx}>
      <UserBarText>
        <span>{project}</span> by {username}
      </UserBarText>
      <LikeButton>
        <p>30</p>
        <i className="ri-hearts-line"></i>
        {/*<i className="ri-hearts-fill"></i>*/}
      </LikeButton>
    </UserBarContainer>
  );
};

const UserBarContainer = styled.div<{
  gap?: string;
  positionx?: string;
}>`
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding: 16px;
  background: rgba(31, 30, 241, 0.8);
  backdrop-filter: blur(3.5px);
  gap: ${({ gap }) => gap};
  position: absolute;
  bottom: 11px;
  left: 0;
  right: 0;
  z-index: 3;
`;

const UserBarText = styled.h3`
  display: inline;
  font-size: 16px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  word-break: break-word;

  span {
    font-weight: bold;
    color: #ffffff;
  }
`;

const LikeButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  cursor: pointer;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  gap: 8px;
  padding: 0;

  p {
    color: #ffffff;
    font-size: 16px;
    line-height: 26px;
    font-weight: bold;
  }

  & i {
    margin-top: -5px;
    color: #ffffff;
    font-size: 26px;
    height: 26px;
    width: 26px;
  }
`;
