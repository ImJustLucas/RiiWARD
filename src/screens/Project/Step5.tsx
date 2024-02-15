/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import Select from "react-select";
import { useAuth } from "@contexts/AuthContext";
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

const _UsersServices = new UsersServices();

export const Step5: React.FC<AddProjectProps> = ({
  id,
  className,
  style,
  project,
}) => {
  const [data, setData] = useState<{ value: string; label: string }[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  const { user } = useAuth();

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
        data
          //@ts-ignore

          .filter((selectUser) => selectUser.id !== user.id)
          .map((selectUser) => ({
            value: selectUser.id.toString(),
            label: selectUser.email,
          })),
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    project.collaborators = selectedOptions;
  }, [selectedOptions]);

  //@ts-ignore
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
            placeholder="Collaborateurs de votre projet"
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
