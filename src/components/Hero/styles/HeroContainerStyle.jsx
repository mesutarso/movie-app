import styled from "styled-components";

export const HeroContainerStyle = styled.div`
  background-image: url("${({ bgImage }) => bgImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: center;
  min-height: 768px;
  width: 100%;
  margin-top: -20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .heroContainer {
    margin: 130px;
    &__detail {
      color: #fffddd;
      margin-bottom: 30px;
      > p span {
        margin-right: 20px;
      }
    }
    &__title {
      font-size: 70px;
      line-height: 72px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &__link {
      font-size: 1.7em;
      font-weight: 700;
      padding: 0.25em 1em;
      border: 2px solid #faff00;
      border-radius: 3px;
      margin-right: 20px;
      background-color: #faff00;
      text-decoration: none;
      text-transform: uppercase;
      color: #010101;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #fff;
        background: transparent;
      }
      svg {
        width: 2em !important;
      }
    }
    &__link--details {
      color: #fff;
      background: transparent;
      &:hover {
        background-color: #faff00;
        color: #010101;
      }
    }
  }
`;
