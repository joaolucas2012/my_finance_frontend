import { Container, Title, StyledInput } from "./styles";

export const AddCategoryContainer = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <StyledInput type="text" placeholder="Nome da categoria" {...props} />
    </Container>
  );
};
