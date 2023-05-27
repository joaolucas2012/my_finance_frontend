import { Container, Title, Value } from "./styles";

export const DataContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Value title={props.title} text={props.value}>{`R$ ${parseFloat(
        props.value
      ).toFixed(2)}`}</Value>
    </Container>
  );
};
