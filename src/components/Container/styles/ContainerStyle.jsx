import styled from "styled-components";

export const ContainerStyle = styled.div`
  margin: 130px;
  color: #fff;
  .container__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h2 {
      font-size: 60px;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
      border: 1px solid #c4c4c4;
      font-weight: 700;
      padding: 1rem;
      transition: all 0.25s ease-out;
      &:hover {
        background-color: #faff00;
        border-color: #faff00;
        color: #010101;
      }
    }
  }
  .rec.rec-arrow {
    border-radius: 0;
    background-color: transparent;
    color: #fff;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: #faff00;
    color: #010101;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
  .rec.rec-dot {
    display: none;
  }
`;
