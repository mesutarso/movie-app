import React from "react";
import NavItem from "./NavItem";
import { Menustyle } from "../styles/MenuStyle";

export default function Menu() {
  const menuItems = ["Accueil", "Films", "Series", "Tendances"];
  return (
    <Menustyle role="nav">
      {menuItems.map((item, i) => (
        <NavItem key={i} menuItem={item} />
      ))}
    </Menustyle>
  );
}
