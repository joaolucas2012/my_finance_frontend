import styled from "styled-components";

export const Information = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 18vh;
  border-radius: 10px;
  margin: 0 9.5vw;
  margin-top: -4rem;
  margin-bottom: 0.9rem;

  @media (max-width: 1024px) {
    height: 16vh;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    height: 10vh;
  }

  @media (max-width: 425px) {
    height: 40vh;
    flex-direction: column;
    padding: 3% 0 3% 0;
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    height: 45vh;
  }
`;
