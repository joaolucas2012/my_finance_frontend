import styled from "styled-components";

export const StyledHeader = styled.header`
  background-image: linear-gradient(to left, rgb(16, 58, 1), rgb(41, 161, 11));
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;

  @media (max-width: 425px) {
    height: 6rem;
  }
`;

export const StyledH2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-top: -2rem;

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;
