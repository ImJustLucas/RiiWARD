import { useEffect, useState } from "react";
import Select from "react-select";
import { UsersServices } from "@services/api/Users";
import { Project } from "@typesDef/project/project";
import { User } from "@typesDef/user/user";
import styled from "styled-components";

type AddProjectProps = {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  id: string;
  className: string;
  style: React.CSSProperties;
};

export const Step5: React.FC<AddProjectProps> = ({
  id,
  className,
  style,
  project,
}) => {
  const [data, setData] = useState<{ value: string; label: string }[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  const _UsersServices = new UsersServices();

  useEffect(() => {
    const fetchUsers = async (): Promise<User[]> => {
      try {
        const response = await _UsersServices.getAllUsers();
        return response || [];
      } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
      }
    };

    const fetchData = async () => {
      const data = await fetchUsers();
      setData(
        data.map((user) => ({ value: user.id.toString(), label: user.email })),
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    project.collaborators = selectedOptions;
  }, [selectedOptions]);

  const setHandle = (e) => {
    setSelectedOptions(e.value);
  };

  return (
    <>
      <ContainerInput id={id} className={className} style={style}>
        <SelectContainer>
          <Select
            options={data}
            onChange={setHandle}
            placeholder="Collaborators of your project"
            isClearable={false}
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