import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        R<span className="electric-blue">ii</span>WARD
      </p>
      <p>made from Nanterre with 🤍 - 2023 / 2024</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 300px;

  background-color: ${(props) => props.theme.colors.dark};

  p {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 16px;

    &:first-child {
      font-size: 64px;
      font-weight: 500;
      margin-bottom: 64px;
      .electric-blue {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
