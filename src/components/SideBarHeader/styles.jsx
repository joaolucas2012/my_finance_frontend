import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #000;
  box-shadow: 0 0 10px 3px;
  z-index: 1000;

  > svg {
    position: fixed;
    color: white;
    width: 25px;
    height: 25px;
    margin-top: 18px;
    margin-left: 18px;
    cursor: pointer;
  }
`;
