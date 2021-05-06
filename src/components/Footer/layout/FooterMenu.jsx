import React from "react";
import NavItem from "../../Header/layout/NavItem";
import { FooterMenuStyle } from "../styles/FooterMenuStyle";

export default function FooterMenu() {
  const menuItems = ["Accueil", "Films", "Series", "Tendances", "Contact"];
  return (
    <FooterMenuStyle>
      <h2>Liens Rapides</h2>
      {menuItems.map((item, i) => (
        <NavItem key={i} menuItem={item} />
      ))}
    </FooterMenuStyle>
  );
}
