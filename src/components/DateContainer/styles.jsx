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

  @media (max-width: 320px) {
    display: flex;
    font-size: 1rem;
    width: 50%;
    height: 30%;
    padding: 0;
    margin-bottom: 2%;
  }
`;

export const StyledInput = styled.input`
  height: 50%;
  width: 95%;

  @media (max-width: 320px) {
    height: 50%;
    width: 70%;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;
`;
