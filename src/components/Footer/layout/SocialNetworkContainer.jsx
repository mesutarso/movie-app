import React from "react";
import { Link } from "react-router-dom";
import { SocialNetWorkContainerStyle } from "../styles/SocialNetworkContainerStyle";

export default function SocialNetworkContainer() {
  return (
    <SocialNetWorkContainerStyle>
      <h2>Réseaux Sociaux</h2>
      <ul>
        <li>
          <Link to="facebook.com">Facebook</Link>
        </li>
        <li>
          <Link to="instagram.com">Instagram</Link>
        </li>
        <li>
          <Link to="twitter.com">Twitter</Link>
        </li>
        <li>
          <Link to="pinterest.com">Pinterest</Link>
        </li>
        <li>
          <Link to="tiktok.com">Tik Tok</Link>
        </li>
      </ul>
    </SocialNetWorkContainerStyle>
  );
}
