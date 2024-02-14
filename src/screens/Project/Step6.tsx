import { useState } from "react";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step6: React.FC<AddProjectProps> = ({
  project,
  id,
  className,
  style,
}) => {
  const [progress, setProgress] = useState(0);
  const [recruit, setRecruit] = useState(false);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(event.target.value));
    project.progress = Number(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecruit(event.target.checked);
    project.recruit = event.target.checked;
  };
  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <InputProgressContainer>
          <Label htmlFor="progress">Progression (%)</Label>
          <InputRange
            type="range"
            onChange={handleRangeChange}
            aftersize={progress}
            value={progress}
            step={10}
          />
          <p>{progress}%</p>
        </InputProgressContainer>
        <InputRecruitContainer>
          <Label htmlFor="recruit">Recrutement</Label>
          <InputCheckbox
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={recruit}
          />
        </InputRecruitContainer>
      </ContainerInput>
    </>
  );
};

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const InputProgressContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

const InputRange = styled.input<{ aftersize: number }>`
  -webkit-appearance: none;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    position: relative;
    z-index: 30;
    height: 20px;
    border: 2px solid white;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    height: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.blue};
    width: ${({ aftersize }: { aftersize: number }) => aftersize + "%"};
  }
`;

const InputRecruitContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InputCheckbox = styled.input`
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background: #d3d3d3;
  border-radius: 50%;
  position: relative;
  transition: background 0.2s;

  &:checked {
    background: ${({ theme }) => theme.colors.blue};

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: white;
    }
  }
`;
