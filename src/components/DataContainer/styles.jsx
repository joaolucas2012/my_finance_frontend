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

  @media (max-width: 320px) {
    font-size: 1rem;
    width: 70%;
    height: 30%;
    justify-content: center;
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

  @media (max-width: 320px) {
    margin-top: 0px;
    margin-left: 5%;
  }
`;
