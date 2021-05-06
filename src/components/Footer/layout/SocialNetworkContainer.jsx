import React from "react";
import { Link } from "react-router-dom";
import { SocialNetWorkContainerStyle } from "../styles/SocialNetworkContainerStyle";

export default function SocialNetworkContainer() {
  return (
    <SocialNetWorkContainerStyle>
      <h2>Réseaux Sociaux</h2>
      <ul>
        <li>
          <Link>Facebook</Link>
        </li>
        <li>
          <Link>Instagram</Link>
        </li>
        <li>
          <Link>Twitter</Link>
        </li>
        <li>
          <Link>Pinterest</Link>
        </li>
        <li>
          <Link>Tik Tok</Link>
        </li>
      </ul>
    </SocialNetWorkContainerStyle>
  );
}
