import { Icon } from "@components/Icon";
import Link from "next/link";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  icon: string;
  link: string;
  onClick?: () => void;
};

export const LeftButton: React.FC<ButtonProps> = ({
  text,
  icon,
  link,
  onClick,
}) => {
  return (
    <ButtonStyled href={link} onClick={onClick}>
      <Icon icon={icon}></Icon>
      <Text>{text}</Text>
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Link)`
  // border-radius: 24px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  // padding: 16px 24px;
  padding: 8px 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    border-radius: 14px;
    padding: 8px 12px;
  }
`;

const Text = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.medium};
    line-height: ${({ theme }) => theme.size.medium};
  }
`;
