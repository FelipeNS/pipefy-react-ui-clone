import React from "react";
import { loadLists } from "../../services/api";

import List, { IList } from "../List";

import { Container } from "./styles";

const lists = loadLists();

function Board() {
  return (
    <Container>
      {lists.map((list: IList) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}

export default Board;
