import React from "react";
import { MdAdd } from "react-icons/md";

import Card, { ICard } from "../Card";

import { Container } from "./styles";

interface Data {
  data: IList;
  index: number;
}
export interface IList {
  title: string;
  creatable: boolean;
  cards: Array<ICard>;
  done?: boolean;
}

const List: React.FC<Data> = ({ data, index: listIndex }) => {
  return (
    <Container done={data?.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} listIndex={listIndex} data={card} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
