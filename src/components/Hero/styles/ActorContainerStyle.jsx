import styled from "styled-components";

export const ActorContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
  width: 70%;

  margin-top: -160px;
  margin-bottom: 50px;
  z-index: 10;
  .image-card {
    margin-right: 20px;

    > img {
      max-width: 100%;
      object-fit: cover;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    > h4 {
      text-align: center;
      color: #fff;
    }
  }
`;
