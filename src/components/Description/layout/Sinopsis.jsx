import React from "react";
import { SynopsisStyle } from "../styles/SynopsisStyle";
import Poster from "../../../assets/movies assets/poster-films/R5572bcc20c14c151f1339c2774df892e.png";

export default function Sinopsis() {
  return (
    <SynopsisStyle>
      <div className="overview">
        <h2>Synopsis</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptates numquam consequuntur, ab autem commodi doloribus, vel porro
          repellat libero assumenda aspernatur modi, molestiae molestias
          quibusdam quo neque? Non, suscipit.
        </p>
      </div>
      <img src={Poster} alt="poster du film" />
    </SynopsisStyle>
  );
}
