import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 40%;
  height: 55%;
  padding: 1%;
  background-color: #008000;
  border-radius: 5px;
  color: #fff;

  @media (max-width: 1024px) {
    width: 16%;
    height: 50%;
  }

  @media (max-width: 768px) {
    width: 16%;
    height: 60%;
  }

  @media (max-width: 425px) {
    width: 50%;
    height: 20%;
    padding-bottom: 2%;
    margin-bottom: 3%;
  }

  @media (max-width: 375px) {
    height: 15%;
  }

  @media (max-width: 320px) {
    width: 60%;
  }
`;

export const StyledInput = styled.input`
  height: 60%;
  font-size: 1rem;
  padding: 1%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media (max-width: 2560px) {
    width: 90%;
    height: 40%;
  }

  @media (max-width: 1440px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    height: 42%;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 42%;
  }

  @media (max-width: 375px) {
    height: 45%;
  }
`;

export const Title = styled.label`
  font-size: 1rem;
`;
