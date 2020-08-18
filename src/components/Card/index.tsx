import React from "react";
import { useDrag } from "react-dnd";

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
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
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
