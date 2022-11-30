import { Container, Title, Value } from "./styles";

export const DataContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Value>{props.value}</Value>
    </Container>
  );
};
