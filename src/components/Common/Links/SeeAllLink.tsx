import Link from "next/link";
import styled from "styled-components";

type LinkSeeAllProps = {
  content: string;
  link: string;
};

export const LinkSeeAll: React.FC<LinkSeeAllProps> = ({ content, link }) => {
  return (
    <SeeAllLink href={link}>
      {content}
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.1714 6.49986L0.22168 1.55006L1.63589 0.13586L7.9999 6.49986L1.63589 12.8638L0.22168 11.4496L5.1714 6.49986Z"
          fill="black"
        />
      </svg>
    </SeeAllLink>
  );
};

const SeeAllLink = styled(Link)`
  position: relative;
  &::before {
    content: "";
    width: 0;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.electricBlue};
    transition: width 0.3s ease;
    opacity: 0;
  }

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin-left: auto;
  display: flex;
  align-items: center;
  text-align: end;
  gap: 8px;
  width: fit-content;
  &:hover {
    color: ${({ theme }) => theme.colors.electricBlue};
    cursor: pointer;
    &::before {
      opacity: 1;
      width: 100%;
    }
    & svg path {
      fill: ${({ theme }) => theme.colors.electricBlue};
    }
  }
`;
