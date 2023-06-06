import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  background-color: #000;
  box-shadow: 0 0 20px 3px;

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
