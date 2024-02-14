import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step2: React.FC<AddProjectProps> = ({
  project,
  id,
  className,
  style,
}) => {
  const handleInputDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    project.description = event.target.value;
  };
  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <InputName
          onChange={handleInputDescriptionChange}
          type="text"
          placeholder="Description de votre projet"
        />
      </ContainerInput>
    </>
  );
};

const InputName = styled.textarea`
  border: none;
  background: white;
  border-radius: 6px;
  width: 100%;
  padding: 16px 24px;
  height: 200px;
  resize: none;
  font-size: 16px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
`;
