import React from "react";
import HeroDetailContainer from "./Layout/HeroDetailContainer";
import ActorContainer from "./Layout/ActorContainer";
import { HeroDetailStyle } from "./styles/HeroDetailStyle";

export default function HeroDetail() {
  return (
    <HeroDetailStyle>
      <HeroDetailContainer />
      <ActorContainer />
    </HeroDetailStyle>
  );
}
