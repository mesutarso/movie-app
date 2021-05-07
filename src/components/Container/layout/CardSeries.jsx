import React from "react";
import poster from "../../../assets/movies assets/poster-films/image.png";
import { Link, link } from "react-router-dom";
import { CardStyle } from "../styles/CardStyle";

export default function CardSeries() {
  return (
    <CardStyle>
      <img
        src={poster}
        alt="poster de la serie"
        className="card__image"
        // width="200"
      />
      <h2 className="card__title">Nom du Film</h2>
      <div className="card__categories">
        <p>2 Saisons</p>
      </div>
      <div className="card__button">
        <Link to="/series">Voir Plus</Link>
      </div>
    </CardStyle>
  );
}
