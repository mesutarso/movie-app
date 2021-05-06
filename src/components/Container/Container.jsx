import React from "react";
import { ContainerStyle } from "./styles/ContainerStyle";
import Carousel from "react-elastic-carousel";
import Card from "./layout/Card";
import { Link } from "react-router-dom";

export default function Container({ titre }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <ContainerStyle>
      <div className="container__title">
        <h2>{titre}</h2>
        <Link to="/tendances">Voir Plus</Link>
      </div>
      <Carousel breakPoints={breakPoints}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </ContainerStyle>
  );
}
