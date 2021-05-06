import React from "react";
import Logo from "../../Header/layout/Logo";
import { LogoanDetailStyle } from "../styles/LogoanDetailStyle";

export default function LogoAndDetail() {
  return (
    <LogoanDetailStyle>
      <Logo />
      <p>
        Deep 4K est un site d'informations sur les nouvelles series et les
        nouveaux films qui sortent dans le monde, Netflix, Amazon, HolyWood,
        BollyWood, NollyWood, NOus fournissons aussi le lien torrent par demande
        et les accès netflix gratuit pendant un mois
      </p>
    </LogoanDetailStyle>
  );
}
