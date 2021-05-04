import React from "react";
import Logo from "./layout/Logo";
import Menu from "./layout/Menu";
import SearchBox from "./layout/SearchBox";
import styled from "styled-components";

export default function Header() {
  return (
    <Div>
      <Logo />
      <Menu />
      <SearchBox />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #010101;
  padding: 5px;
`;
