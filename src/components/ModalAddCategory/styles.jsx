import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60%;
  width: 60%;
  border-radius: 10px;
  color: #000;
`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
`;

export const StyledDiv = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  height: 40%;
  width: 80%;
`;
