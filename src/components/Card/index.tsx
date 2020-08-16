import React from "react";

import { Container, Label } from "./styles";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7259c1" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        alt="Avatar"
      />
    </Container>
  );
}

export default Card;
