import React from "react";
import LogoFile from "../../../assets/DEEP.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Div>
      <Link to="/">
        <img src={LogoFile} alt="Logo du site" />
      </Link>
    </Div>
  );
}

const Div = styled.div`
  width: 140px;
  img {
    max-width: 100%;
  }
`;
