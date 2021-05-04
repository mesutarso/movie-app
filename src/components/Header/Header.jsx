import React from "react";
import Logo from "./layout/Logo";
import Menu from "./layout/Menu";
import SearchBox from "./layout/SearchBox";

export default function Header() {
  return (
    <div>
      <Logo />
      <Menu />
      <SearchBox />
    </div>
  );
}
