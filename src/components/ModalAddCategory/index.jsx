import { useState, forwardRef } from "react";
import { AddCategoryContainer } from "../AddCategoryContainer";
import { Button } from "../Button";
import { Container, Wrapper, StyledTitle, StyledDiv } from "./styles";

export const ModalAddCategory = forwardRef((props, ref) => {
  const [description, setDescription] = useState("");

  const submitItem = () => {
    const data = { description };
    props.addCategory(data);
  };

  return props.isOpen ? (
    <Container>
      <Wrapper ref={ref}>
        <StyledTitle>Adicionar Categoria</StyledTitle>
        <StyledDiv>
          <AddCategoryContainer
            title={"Nome: "}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button style={{ width: "20%" }} onClick={submitItem}>
            Adicionar
          </Button>
        </StyledDiv>
      </Wrapper>
    </Container>
  ) : null;
});
