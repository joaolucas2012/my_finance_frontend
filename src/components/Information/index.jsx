import { Container } from "./styles";
import { DateContainer } from "../DateContainer";
import { DataContainer } from "../DataContainer";
import { Button } from "../Button";

export const Information = () => {
  return (
    <Container>
      <DateContainer title={"Data Inicial"} />
      <DateContainer title={"Data Final"} />
      <Button>Buscar</Button>
      <DataContainer title={"Receita"} value={"10000"} />
      <DataContainer title={"Despesas"} value={"112"} />
      <DataContainer title={"Balanço"} value={"9888"} />
    </Container>
  );
};
