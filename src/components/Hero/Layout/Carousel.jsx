import React from "react";
import poster from "../../../assets/movies assets/mainImage.jpeg";
import styled from "styled-components";

export default function Carousel() {
  return (
    <Div>
      <img src={poster} alt="" />
      <div className="carousel__detail">
        <p>
          <span>3h2min </span>
          <span>Action </span>
          <span>Fiction </span>
          <span>Sci-Fi </span>
        </p>
        <h1>
          Avengers : <br /> Endgame
        </h1>
        <a>Bande d'annonce</a>
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 100%;
  max-height: 768px;
  > img {
    max-width: 100%;
    object-fit: cover;
  }
  .carousel__detail {
    position: absolute;
    top: 50%;
    left: 110px;
    transform: translateY(-50%);
    color: #ffffff;
    > h1 {
      font-weight: 700;
      font-size: 6rem;
      line-height: 6rem;
    }
    > p span {
      font-size: 20px;
      margin-right: 1rem;
      font-weight: 500;
      color: #fffdfd;
    }
    > a {
      display: inline-block;
      border-radius: 3px;
      padding: 15px 22px;
      background: #faff00;
      color: #010101;
      font-size: 20px;
      font-weight: 900;
      border: 2px solid #010101;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #ffffff;
        border-color: #faff00;
        background-color: transparent;
      }
    }
  }
`;
