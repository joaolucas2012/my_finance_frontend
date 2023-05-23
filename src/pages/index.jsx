import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { AddFinanceContainer } from "../components/AddFinanceContainer";
import { InfoTable } from "../components/InfoTable";
import { api } from "../services/api.js";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [financesList, setFinancesList] = useState([]);
  const [revenue, setRevenue] = useState("");
  const [expense, setExpense] = useState("");

  const handlePostItems = (item) => {
    const data = item.data;

    api.post("http://localhost:8080/create/finance", data).then((response) => {
      api.get("http://localhost:8080/list/finance/0").then((response) => {
        setFinancesList(response.data.Finance.rows);
      });

      const success = response.status === 200 ? true : false;

      if (success) {
        toast.success("Movimentação adicionada com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Falha ao adicionar movimentação!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };

  const handleSearchFinancesByDate = (firstDate, secondDate) => {
    api
      .get(`http://localhost:8080/list/finance/${firstDate}/${secondDate}/0`)
      .then((response) => {
        setFinancesList(response.data.Finance.rows);

        let totalRevenue = 0;
        let totalExpense = 0;

        for (var row of response.data.Finance.rows) {
          row.categoryId === 13
            ? (totalExpense += row.value)
            : (totalRevenue += row.value);
        }

        setRevenue(totalRevenue);
        setExpense(totalExpense);
      });
  };

  useEffect(() => {
    api.get("http://localhost:8080/list/finance/0").then((response) => {
      setFinancesList(response.data.Finance.rows);
    });

    api.get("http://localhost:8080/get/financeBalance/14").then((response) => {
      setRevenue(response.data.balance);
    });

    api.get("http://localhost:8080/get/financeBalance/13").then((response) => {
      setExpense(response.data.balance);
    });
  }, []);

  return (
    <>
      <Header />
      <Information
        handleSearch={handleSearchFinancesByDate}
        revenue={revenue}
        expense={expense}
      />
      <AddFinanceContainer postItems={handlePostItems} />
      <InfoTable financesList={financesList} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
