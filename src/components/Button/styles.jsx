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
`;
