import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #008000;
  padding: 18px;
  width: 8%;
  height: 18%;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #7ad32d;
    cursor: pointer;
    transition: 0.2s ease-out;
  }

  @media (max-width: 1024px) {
    width: 11%;
  }

  @media (max-width: 768px) {
    width: 13%;
    height: 10%;
  }

  @media (max-width: 425px) {
    width: 30%;
    height: 5%;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    width: 35%;
  }
`;
