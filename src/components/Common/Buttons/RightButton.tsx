import { Icon } from "@components/Icon";
import Link from "next/link";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  icon: string;
  link: string;
};

export const RightButton: React.FC<ButtonProps> = ({ text, icon, link }) => {
  return (
    <ButtonStyled href={link}>
      <Text>{text}</Text>
      <Icon icon={icon}></Icon>
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Link)`
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    border-radius: 14px;
    padding: 8px 12px;
  }
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.size.title};
  line-height: ${({ theme }) => theme.size.title};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.medium};
    line-height: ${({ theme }) => theme.size.medium};
  }
`;
