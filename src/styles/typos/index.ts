import styled from "styled-components";

export const H1Container = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  text-transform: uppercase;

  .electric-blue {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  text-transform: uppercase;

  .electric-blue {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
`;
