import React from "react";
import poster from "../../../assets/movies assets/poster-films/image.png";
import { Link, link } from "react-router-dom";
import { CardStyle } from "../styles/CardStyle";

export default function Card() {
  return (
    <CardStyle>
      <img src={poster} alt="poster du film" className="card__image" />
      <h2 className="card__title">Nom du Film</h2>
      <div className="card__categories">
        <p>Action</p>
        <p>Films</p>
      </div>
      <div className="card__button">
        <Link to="/films">Voir Plus</Link>
      </div>
    </CardStyle>
  );
}
