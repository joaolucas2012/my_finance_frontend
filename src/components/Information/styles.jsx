import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
  height: 18vh;
  border-radius: 10px;
  margin: 0 9.5vw;
  margin-top: -4rem;
  margin-bottom: 4.7rem;

  @media (max-width: 1024px) {
    height: 16vh;
  }

  @media (max-width: 768px) {
    height: 11vh;
  }

  @media (max-width: 425px) {
    width: 80vw;
    height: 40vh;
    padding-top: 3%;
    margin: 0 9.5vw;
    margin-top: -2rem;
    margin-bottom: 4.8rem;
    flex-direction: column;
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    width: 80vw;
    height: 40vh;
    padding-top: 3%;
    margin: 0 9.5vw;
    margin-top: -2rem;
    margin-bottom: 4.8rem;
    flex-direction: column;
    font-size: 1rem;
  }
`;
