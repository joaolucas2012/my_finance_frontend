import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 12%;
  height: 55%;
  padding: 1%;
  background-color: #008000;
  border-radius: 5px;
  color: #fff;
`;

export const StyledInput = styled.input`
  height: 70%;

  @media (max-width: 1440px) {
    height: 50%;
    width: 100%;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;
`;
