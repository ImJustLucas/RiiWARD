import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import styled from "styled-components";

const Loading = () => {
  return (
    <RoundedContainer>
      <H1>Loading...</H1>
    </RoundedContainer>
  );
};

export default Loading;

const H1 = styled.h1`
  font-size: 3rem;
`;
