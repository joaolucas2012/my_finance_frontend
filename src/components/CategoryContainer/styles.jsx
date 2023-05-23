import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 13%;
  height: 55%;
  padding: 15px;
  background-color: #008000;
  border-radius: 5px;
  color: #fff;
`;

export const StyledSelect = styled.select`
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.label`
  font-size: 1.2rem;
`;
