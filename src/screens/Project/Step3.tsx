import { useEffect, useState } from "react";
import Select from "react-select";
import { SkillsServices } from "@services/api/Skills";
import { Project } from "@typesDef/project/project";
import { Skill } from "@typesDef/skill/skill";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step3: React.FC<AddProjectProps> = ({
  id,
  className,
  style,
  project,
}) => {
  const [data, setData] = useState<{ value: string; label: string }[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>("");
  const _SkillsServices = new SkillsServices();

  useEffect(() => {
    const fetchSkills = async (): Promise<Skill[]> => {
      try {
        const response = await _SkillsServices.getAllSkills();
        return response || [];
      } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
      }
    };

    const fetchData = async () => {
      const data = await fetchSkills();
      setData(data.map((skill) => ({ value: skill.id, label: skill.content })));
    };

    fetchData();
  }, []);

  useEffect(() => {
    project.skillsId = selectedOptions;
  }, [selectedOptions]);

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((skill) => skill.value) : []);
  };

  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <SelectContainer>
          <Select
            options={data}
            onChange={setHandle}
            placeholder="Skills utilisés dans votre projet"
            isClearable={false}
            isMulti
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "transparent" : "",
              }),
            }}
            maxMenuHeight={150}
          />
        </SelectContainer>
      </ContainerInput>
    </>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  & > div {
    width: 100%;

    & * {
      border: none;

      &:focus {
        border: none;
      }
    }
  }
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
`;
