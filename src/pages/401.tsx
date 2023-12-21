// pages/401.tsx

import { RoundedContainer } from "@components/Common/Containers/RoundedContainer";
import styled from "styled-components";

const Custom401 = () => {
  const containerStyle = `
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  `;

  return (
    <RoundedContainer customStyles={containerStyle}>
      <H1>401 - Unauthorized</H1>
      <Paragraph style={{}}>
        You do not have permission to view this page.
      </Paragraph>
    </RoundedContainer>
  );
};

export default Custom401;

const H1 = styled.h1`
  font-size: 3rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
`;
