import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step1: React.FC<AddProjectProps> = ({
  project,
  id,
  className,
  style,
}) => {
  const handleInputNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    project.name = event.target.value;
  };

  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <InputName
          onChange={handleInputNameChange}
          type="text"
          placeholder="Titre de votre projet"
          required
        />
      </ContainerInput>
    </>
  );
};

const InputName = styled.input`
  border: none;
  background: white;
  border-radius: 50px;
  width: 100%;
  padding: 6px 12px;
  font-size: 24px;
  text-align: center;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
`;
