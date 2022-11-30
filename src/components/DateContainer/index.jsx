import { Container, StyledInput, Title } from "./styles";

export const DateContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StyledInput type="date" />
    </Container>
  );
};
