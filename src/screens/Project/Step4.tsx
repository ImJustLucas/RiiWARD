import { useRef, useState } from "react";
import { Project } from "@typesDef/project/project";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step4: React.FC<AddProjectProps> = ({
  project,
  id,
  className,
  style,
}) => {
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
    project.image = event.target.files[0].name;
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <Button onClick={handleClick} type="button">
          <i className="ri-upload-2-line"></i>
          Choisir une image
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={handleChange}
        />
        {file && <p>C:\fakepath\{file.name}</p>}
      </ContainerInput>
    </>
  );
};

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 50px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
