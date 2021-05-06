import React from "react";
import { Link } from "react-router-dom";

export default function SocialNetworkContainer() {
  return (
    <div>
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
    </div>
  );
}
