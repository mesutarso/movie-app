import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { HeroContainerStyle } from "../styles/HeroContainerStyle";
import poster from "../../../assets/movies assets/poster-films/6.jpg";

export default function HeroDetail() {
  return (
    <HeroContainerStyle bgImage={poster}>
      <div className="heroContainer">
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faPlayCircle} />
        </Link>
        <div className="heroContainer__detail text-right">
          <p>
            <span>3h2min </span>
            <span>Action </span>
            <span>Fiction </span>
            <span>Sci-Fi </span>
          </p>
        </div>

        <h1 className="heroContainer__title text-right">
          Avengers : <br /> Endgame
        </h1>
      </div>
    
    </HeroContainerStyle>
    
  );
}
