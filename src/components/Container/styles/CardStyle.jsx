import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  color: #fff;
  transition: transform 0.5s ease-in-out;
  &:hover {
    border: 2px solid #c4c4c4;
    transform: scale(1.1);
    padding: 30px;
    > img {
      max-width: 100%;
    }
  }
  .carad__image {
    max-width: 100%;
  }
  .card__title {
    font-size: 30px;
    margin: 20px 0;
    text-align: center;
  }
  .card__categories {
    display: flex;
    > p {
      border: 1px solid #c4c4c4;
      color: #c4c4c4;
      padding: 10px 20px;
      margin-right: 20px;
    }
  }
`;
