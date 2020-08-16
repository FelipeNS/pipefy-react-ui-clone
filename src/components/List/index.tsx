import React from "react";
import { MdAdd } from "react-icons/md";

import Card, { ICard } from "../Card";

import { Container } from "./styles";

interface Data {
  data: IList;
}
export interface IList {
  title: string;
  creatable: boolean;
  cards: Array<ICard>;
  done?: boolean;
}

const List: React.FC<Data> = ({ data }) => {
  return (
    <Container done={data.done ? data.done : false}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
