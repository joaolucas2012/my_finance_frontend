import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: #000;

  @media (max-width: 425px) {
    width: 80%;
    margin-top: -1.5rem;
  }
`;

export const BodyContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: -0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    width: 80%;
  }
`;
