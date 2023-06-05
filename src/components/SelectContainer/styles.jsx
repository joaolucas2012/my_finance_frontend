import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 13%;
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

export const StyledSelect = styled.select`
  height: 60%;
  font-size: 0.8rem;
  padding: 1%;

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

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;
`;
