import { Container, StyledInput, Title } from "./styles";

export const InputContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StyledInput type="text" />
    </Container>
  );
};
