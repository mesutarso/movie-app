import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import {Menustyle} from '../styles/MenuStyle'

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
const Ul = styled.ul`
 
`;
