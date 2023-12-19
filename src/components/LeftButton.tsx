import { Icon } from "@components/Icon";
import Link from "next/link";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  icon: string;
  link: string;
};

export const LeftButton: React.FC<ButtonProps> = ({ text, icon, link }) => {
  return (
    <ButtonStyled href={link}>
      <Icon icon={icon}></Icon>
      <Text>{text}</Text>
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
`;

const Text = styled.span`
  font-size: 32px;
  line-height: 32px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};
`;
