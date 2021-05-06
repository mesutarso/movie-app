import React from "react";
import Logo from "./layout/Logo";
import Menu from "./layout/Menu";
import SearchBox from "./layout/SearchBox";
import { HeaderStyle } from "./styles/HeaderStyle";

export default function Header() {
  return (
    <HeaderStyle>
      <Logo />
      <Menu />
      <SearchBox />
    </HeaderStyle>
  );
}
