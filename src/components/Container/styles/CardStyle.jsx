import styled from "styled-components";

export const CardStyle = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  margin: 50px 0;

  &:hover {
    border: 1px solid #c4c4c4;
    transform: scale(1.05);
    padding: 15px;
    > img {
      max-width: 100%;
    }
    > .card__button {
      display: block;
    }
  }
  > img {
    max-width: 100%;
  }
  .card__title {
    font-size: 18px;
    margin: 10px 0;
    text-align: center;
  }
  .card__categories {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    > p {
      border: 1px solid #c4c4c4;
      color: #c4c4c4;
      padding: 5px 10px;
      margin-right: 10px;
    }
  }
  .card__button {
    text-align: center;
    display: none;

    a {
      font-size: 18pxem;
      font-weight: 700;
      padding: 0.25em 1em;
      border: 2px solid #faff00;
      border-radius: 3px;
      background-color: #faff00;
      text-decoration: none;
      text-transform: uppercase;
      color: #010101;

      &:hover {
        color: #fff;
        background: transparent;
      }
    }
  }
`;
