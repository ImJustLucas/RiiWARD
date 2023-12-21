import styled from "styled-components";

export const BackdropComponent: React.FC = () => {
  return <Backdrop />;
};

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  z-index: 2;
`;
