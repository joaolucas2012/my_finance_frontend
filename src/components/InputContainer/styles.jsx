import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 12%;
  height: 55%;
  padding: 1%;
  background-color: #008000;
  border-radius: 5px;
  color: #fff;

  @media (max-width: 1024px) {
    width: 15%;
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 60%;
  }

  @media (max-width: 425px) {
    width: 50%;
    height: 20%;
    padding-bottom: 1%;
    flex-direction: column;
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
  height: 70%;

  @media (max-width: 1440px) {
    height: 50%;
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 85%;
    height: 40%;
    padding-bottom: 2%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 90%;
    height: 40%;
    padding-bottom: 2%;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;
`;
