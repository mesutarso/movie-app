import React from "react";
import HeroContainer from "./Layout/HeroContainer";
import Container from "../Container/Container";
export default function Hero() {
  return (
    <div>
      <HeroContainer />
      <Container titre="Tendances"/>
      <Container titre="Les Récents Films"/>
      <Container titre="Les Récents Series"/>
    </div>
  );
}
