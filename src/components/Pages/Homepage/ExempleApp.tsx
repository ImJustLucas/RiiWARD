import styled from "styled-components";

export const ExempleApp: React.FC = () => {
  return (
    <ExempleAppContainer>
      <TopBar>
        <CircleRed />
        <CircleOrange />
        <CircleGreen />
      </TopBar>
      <Content />
    </ExempleAppContainer>
  );
};

const ExempleAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 728px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px 16px 0 0;
  gap: 8px;
  padding: 0 16px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const CircleRed = styled(Circle)`
  background-color: ${(props) => props.theme.colors.danger};
`;

const CircleOrange = styled(Circle)`
  background-color: ${(props) => props.theme.colors.warning};
`;

const CircleGreen = styled(Circle)`
  background-color: ${(props) => props.theme.colors.success};
`;

const Content = styled.div`
  width: 728px;
  padding: 0 16px;
  height: 375px;
  background-color: #d9d9d9;
  border-radius: 0 0 16px 16px;
`;
