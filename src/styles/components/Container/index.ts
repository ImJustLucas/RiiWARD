import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;

  p.card-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: center;
  }
`;
