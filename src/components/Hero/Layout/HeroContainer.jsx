import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { HeroContainerStyle } from "../styles/HeroContainerStyle";
import poster from "../../../assets/movies assets/mainImage.jpeg";

export default function HeroContainer() {
  return (
    <HeroContainerStyle bgImage={poster} alignText="left">
      <div className="heroContainer">
        <div className="heroContainer__detail">
          <p>
            <span>3h2min </span>
            <span>Action </span>
            <span>Fiction </span>
            <span>Sci-Fi </span>
          </p>
        </div>

        <h1 className="heroContainer__title">
          Avengers : <br /> Endgame
        </h1>
        <Link className="heroContainer__link" to="/films">
          Trailer <FontAwesomeIcon icon={faPlayCircle} />
        </Link>
        <Link
          className="heroContainer__link heroContainer__link--details"
          to="/films"
        >
          Voir Plus <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </HeroContainerStyle>
  );
}
