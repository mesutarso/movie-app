import React from "react";
import { ActorContainerStyle } from "../styles/ActorContainerStyle";
import ImageActor from "../../../assets/movies assets/poster-films/OIP.png";

export default function ActorContainer() {
  return (
    <ActorContainerStyle>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
      <div className="image-card">
        <img src={ImageActor} alt="image de l'acteur" />
        <h4>Nom de l'Acteur</h4>
      </div>
    </ActorContainerStyle>
  );
}
