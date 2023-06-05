import { Container, StyledSelect, Title } from "./styles";

export const SelectContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StyledSelect {...props}>{props.children}</StyledSelect>
    </Container>
  );
};
