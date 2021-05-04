import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ menuItem }) {
  return (
    <li>
      <Link
        to={`/${
          menuItem === "Accueil"
            ? ""
            : menuItem.toLowerCase.replace(/[^a-z0-9]/g, "-")
        }`}
      >
        {menuItem}
      </Link>
    </li>
  );
}
