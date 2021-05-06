import styled from "styled-components";

export const NewsletterContainerStyle = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 50px;
  }
  input {
    padding: 15px;
    background-color: transparent;
    color: #fff;
    border: 1px solid #faff00;
    width: 100%;
    margin-bottom: 15px;
  }
  button {
    font-size: 1.7em;
    font-weight: 700;
    padding: 0.25em 1em;
    border: 2px solid #faff00;
    border-radius: 3px;
    margin-right: 20px;
    width: 100%;
    background-color: #faff00;
    text-transform: uppercase;
    color: #010101;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: transparent;
    }
  }
`;
