import { useState } from "react";
import { Container } from "./styles";
import { DateContainer } from "../DateContainer";
import { DataContainer } from "../DataContainer";
import { Button } from "../Button";

export const Information = ({ ...props }) => {
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  return (
    <Container>
      <DateContainer
        onChange={(e) => setFirstDate(e.target.value)}
        title={"Data inicial"}
      />
      <DateContainer
        onChange={(e) => setSecondDate(e.target.value)}
        title={"Data final"}
      />
      <Button onClick={() => props.handleSearch(firstDate, secondDate)}>
        Buscar
      </Button>
      <DataContainer title={"Receita"} value={props.revenue} />
      <DataContainer title={"Despesas"} value={props.expense} />
      <DataContainer title={"Balanço"} value={props.revenue - props.expense} />
    </Container>
  );
};
