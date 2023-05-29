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
    width: 17%;
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 60%;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    width: 50%;
    height: 20%;
    padding: 2% 0;
    margin-bottom: 3%;
  }

  @media (max-width: 320px) {
    width: 60%;
    padding: 1% 0;
    margin-bottom: 3%;
  }
`;

export const StyledInput = styled.input`
  height: 50%;
  width: 95%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    height: 40%;
    width: 100%;
  }

  @media (max-width: 425px) {
    height: 50%;
    width: 70%;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
