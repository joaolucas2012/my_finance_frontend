import { SideBarHeader } from "../components/SideBarHeader";
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

  const handleAddFinance = (item) => {
    const data = item.data;

    if (
      [data.date, data.categoryId, data.title, data.value].some(
        (variable) => variable === ""
      ) ||
      data.value === "0"
    ) {
      makeNotification(
        "Forneça todos os dados válidos necessários para criar um lançamento!",
        false
      );
    } else {
      api.post("/create/finance", data).then((response) => {
        api.get("/list/finance").then((resp) => {
          setFinancesList(resp.data.Finance.rows);
          makeBalance(resp.data);
        });

        response.status === 200
          ? makeNotification("Movimentação adicionada com sucesso!", true)
          : makeNotification("Falha ao adicionar movimentação!", false);
      });
    }
  };

  const handleSearchFinancesByDate = (firstDate, secondDate) => {
    api
      .get(`http://localhost:8080/list/finance/${firstDate}/${secondDate}`)
      .then((response) => {
        if (response.data.Finance.rows.length !== 0) {
          setFinancesList(response.data.Finance.rows);
          makeBalance(response.data);
        } else {
          makeNotification("Nenhum dado encontrado no período!", false);
        }
      });
  };

  useEffect(() => {
    api.get("/list/finance").then((response) => {
      setFinancesList(response.data.Finance.rows);
    });

    api.get("/get/financeBalance/14").then((response) => {
      setRevenue(response.data.balance);
    });

    api.get("/get/financeBalance/13").then((response) => {
      setExpense(response.data.balance);
    });
  }, []);

  /** Função para montar o balanço baseado nas entradas de dados em dinheiro. */
  const makeBalance = (data) => {
    let totalRevenue = 0;
    let totalExpense = 0;

    for (var row of data.Finance.rows) {
      row.categoryId === 13
        ? (totalExpense += row.value)
        : (totalRevenue += row.value);
    }

    setRevenue(totalRevenue);
    setExpense(totalExpense);
  };

  /** Função para montar uma toast notification baseada na mensagem fornecida
   * e no tipo da notificação, recebidos por parâmetro. Se success for true,
   * monta um toast.success, e em caso contrário, monta um toast.error.
   */
  const makeNotification = (message, success) => {
    const options = { false: toast.error, true: toast.success };

    options[success](message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <SideBarHeader />

      <Header title="Controle Financeiro" />

      <Information
        handleSearch={handleSearchFinancesByDate}
        revenue={revenue}
        expense={expense}
      />

      <AddFinanceContainer postItems={handleAddFinance} />

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
