import { Container, StyledSelect, Title } from "./styles";

export const CategoryContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StyledSelect {...props}>{props.children}</StyledSelect>
    </Container>
  );
};
