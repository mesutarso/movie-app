import styled from "styled-components";

export const Menustyle = styled.ul`
  list-style: none;
  display: flex;

  > li {
    margin-right: 50px;
    margin-left: 50px;
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 600px;
      color: #ffffff;
      &:hover {
        color: #faff00;
      }
    }
  }
`;
