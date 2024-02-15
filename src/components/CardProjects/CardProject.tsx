import styled from "styled-components";

type CardProjectProps = {
  title: string;
  description: string;
  image: string;
};

export const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <CardProjectComponent>
      <ContainerImageProject>
        <img src={image} alt={title} />
      </ContainerImageProject>
      <ContainerInfosProjet>
        <h3>{title}</h3>
        <p>{description}</p>
      </ContainerInfosProjet>
    </CardProjectComponent>
  );
};

const CardProjectComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  padding: 20px;
  border-radius: 16px;
`;

const ContainerImageProject = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

const ContainerInfosProjet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;

  h3 {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  p {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }

  div {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    gap: 2px;
  }
`;
