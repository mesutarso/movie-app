import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";

export default function Menu() {
  const menuItems = ["Accueil", "Films", "Series", "Tendances"];
  return (
    <Ul role="nav">
      {menuItems.map((item, i) => (
        <NavItem key={i} menuItem={item} />
      ))}
    </Ul>
  );
}
const Ul = styled.ul`
  list-style: none;
  display: flex;

  > li {
    margin-right: 50px;
    margin-left: 50px;
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight:600px;
      color: #ffffff;
      &:hover {
        color: #faff00;
      }
    }
  }
`;
