import React from "react";
import NavItem from "./NavItem";

export default function Menu() {
  const menuItems = ["Accueil", "Films", "Series", "Tendances"];
  return (
    <ul>
      {menuItems.map((item, i) => (
        <NavItem key={i} menuItem={item} />
      ))}
    </ul>
  );
}
