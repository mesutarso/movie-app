import React from "react";
import LogoFile from "../../../assets/DEEP.png";
import { Link } from "react-router-dom";
import { LogoStyle } from "../styles/LogoStyle";

export default function Logo() {
  return (
    <LogoStyle>
      <Link to="/">
        <img src={LogoFile} alt="Logo du site" />
      </Link>
    </LogoStyle>
  );
}
