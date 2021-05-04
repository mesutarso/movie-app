import React from "react";
import styled from "styled-components";

export default function SearchBox() {
  return (
    <Div>
      {/* <Icon icon={searchOutlined} /> */}
      <input type="search" name="search" placeholder="Rechercher...." />
    </Div>
  );
}

const Div = styled.div`
  display: flex;

  input {
    padding: 10px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    color: #fff;
    width: 500px;
  }
`;
