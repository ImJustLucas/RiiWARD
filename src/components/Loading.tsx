import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <RoundedContainer>
      <Spinner />
    </RoundedContainer>
  );
};

export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 5px solid black;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
