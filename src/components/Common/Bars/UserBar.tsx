import Image from "next/image";
import styled from "styled-components";

export type UserBarProps = {
  username: string;
  avatar: string;
  project: string;
  gap?: string;
  positionx?: "left" | "right";
};

export const UserBar: React.FC<UserBarProps> = ({
  avatar,
  username,
  project,
  gap = "8px",
  positionx = "right",
}) => {
  return (
    <UserBarContainer gap={gap} positionx={positionx}>
      <div>
        <StyledImage src={avatar} alt={username} />
        <div>
          <UserBarUsername>{username}</UserBarUsername>
          <UserBarProject>{project}</UserBarProject>
        </div>
      </div>
      <LikeButton>
        <i className="ri-hearts-line"></i>
      </LikeButton>
    </UserBarContainer>
  );
};

const UserBarContainer = styled.div<{
  gap?: string;
  positionx?: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3.5px);
  gap: ${({ gap }) => gap};
  position: absolute;
  bottom: 40px;
  ${({ positionx }) => positionx} : 32px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;

    & > div {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  width: 64px;
  height: 64px;
  background: #ffffff;
`;

const UserBarUsername = styled.h3`
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

const UserBarProject = styled.span`
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Inter", sans-serif;
`;

const LikeButton = styled.button`
  background: ${({ theme }) => theme.colors.background.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63px;
  width: 63px;
  border: 1px solid ${({ theme }) => theme.colors.background.dark};
  cursor: pointer;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  & i {
    color: #ffffff;
    font-size: 28px;
  }

  &:hover {
    background: #ffffff;

    & i {
      color: #000000;
    }
  }
`;
