import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { AddFinanceContainer } from "../components/AddFinanceContainer";
import { InfoTable } from "../components/InfoTable";
import { api } from "../services/api.js";
import { useState, useEffect } from "react";

export const Home = () => {
  const handlePostItems = (item) => {
    const data = item.data;
    api
      .post("http://localhost:8080/create/finance", data)
      .then((response) => console.log(response));
  };

  const [financesList, setFinancesList] = useState([]);

  useEffect(() => {
    api.get("http://localhost:8080/list/finance/0").then((response) => {
      setFinancesList(response.data.rows);
    });
  }, []);

  return (
    <>
      <Header />
      <Information />
      <AddFinanceContainer postItems={handlePostItems} />
      <InfoTable financesList={financesList} />
    </>
  );
};
