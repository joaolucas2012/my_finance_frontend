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
`;

export const StyledSelect = styled.select`
  height: 60%;
  font-size: 0.8rem;
  padding: 1%;

  @media (max-width: 1440px) {
    width: 90%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.label`
  font-size: 0.9rem;
`;
