import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  width: 10%;
  height: 55%;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 1024px) {
    width: 13%;
    font-size: 1rem;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    justify-content: space-evenly;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    width: 50%;
    height: 30%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Title = styled.label`
  color: #fff;
`;

export const Value = styled.label`
  color: ${(props) => {
    if (
      props.title === "Receita" ||
      (props.title === "Balanço" && !props.text.toString().includes("-"))
    ) {
      return "#7ad32d";
    } else {
      return "#ce0404";
    }
  }};

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    margin-top: 0px;
    font-size: 0.9rem;
  }
`;
