import React from "react";
import Container from "../Container/Container";
import Synopsis from "./layout/Sinopsis";

export default function Description() {
  return (
    <div>
      <Synopsis />
      <Container titre="Voir Aussi" type="films" />
    </div>
  );
}
