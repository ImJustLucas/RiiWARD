import { Icon } from "@components/Icon";
import Link from "next/link";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  icon: string;
  link: string;
  onClick?: () => void;
};

export const RightButton: React.FC<ButtonProps> = ({
  text,
  icon,
  link,
  onClick,
}) => {
  return (
    <ButtonStyled href={link} onClick={onClick}>
      <Text>{text}</Text>
      <Icon icon={icon}></Icon>
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Link)`
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100%;
`;

const Text = styled.span`
  font-size: 32px;
  line-height: 32px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};
`;
