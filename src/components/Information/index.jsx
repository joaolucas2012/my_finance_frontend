import { useState, useEffect } from "react";
import { Container } from "./styles";
import { DateContainer } from "../DateContainer";
import { DataContainer } from "../DataContainer";
import { Button } from "../Button";
import { api } from "../../services/api.js";

export const Information = () => {
  const [revenue, setRevenue] = useState("");
  const [expense, setExpense] = useState("");
  const [financialStatement, setFinancialStatement] = useState("");

  const showInformation = () => {
    api.get("http://localhost:8080/get/financeBalance/14").then((response) => {
      setRevenue(response.data.balance);
    });
  };

  useEffect(() => {
    api.get("http://localhost:8080/get/financeBalance/14").then((response) => {
      setRevenue(response.data.balance);
    });
    api.get("http://localhost:8080/get/financeBalance/13").then((response) => {
      setExpense(response.data.balance);
    });
    // setFinancialStatement(revenue - balance);
  }, []);

  return (
    <Container>
      <DateContainer title={"Data Inicial"} />
      <DateContainer title={"Data Final"} />
      <Button onClick={showInformation}>Buscar</Button>
      <DataContainer title={"Receita"} value={revenue} />
      <DataContainer title={"Despesas"} value={expense} />
      <DataContainer title={"Balanço"} value={financialStatement} />
    </Container>
  );
};
