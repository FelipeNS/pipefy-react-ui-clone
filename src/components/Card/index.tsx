import React from "react";

import { Container, Label } from "./styles";

interface Data {
  data: ICard;
}
export interface ICard {
  id: number;
  content: string;
  labels: Array<string>;
  user?: string;
}

const Card: React.FC<Data> = ({ data }) => {
  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar" />}
    </Container>
  );
};

export default Card;
