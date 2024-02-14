import { CardContainer } from "@styles/components/Container";
import styled from "styled-components";

export const ProjectName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <ProjectNameContainer className="ProjectName">
      {name || "ProjectName"}
    </ProjectNameContainer>
  );
};

const ProjectNameContainer = styled(CardContainer)`
  display: flex;
  font-size: 36px;
  text-align: center;
  line-height: normal;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    top: 0;
    transform: translateX(100%);
    width: 100%;
    min-height: 100%;
    position: absolute;
    z-index: 1;
    animation: slide 9s infinite;

    /* 
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
  */
    background: -moz-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, rgba(255, 255, 255, 0)),
      color-stop(50%, rgba(255, 255, 255, 0.8)),
      color-stop(99%, rgba(128, 186, 232, 0)),
      color-stop(100%, rgba(125, 185, 232, 0))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
  }

  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
