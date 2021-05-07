import styled from "styled-components";

export const SynopsisStyle = styled.div`
  display: flex;
  margin: 130px;
  .overview {
    width: 60%;
    color: #c4c4c4;
    margin-right: 20px;
    h2 {
      color: #faff00;
      font-size: 60px;
      margin-bottom: 50px;

      &::after {
        content: " ";
        display: block;
        width: 15%;
        height: 10px;
        font-size: 40px;
        background-color: #faff00;
        margin-top: 30px;
      }
    }
    h3 {
      margin-bottom: 50px;
    }
    p {
      margin-bottom: 50px;
    }
    ul {
      list-style: none;
      margin-bottom: 50px;
    }
    .categories,
    .directors {
      display: flex;

      justify-content: space-between;
      > li {
        color: #faff00;
      }
    }
  }
  .poster {
    width: 40%;
    padding: 30px;
    img {
      max-width: 100%;
    }
  }
`;
