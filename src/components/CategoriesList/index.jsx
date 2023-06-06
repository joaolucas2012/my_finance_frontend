import { useState, useEffect, useRef } from "react";

import { Delete } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListDivider,
  IconButton,
} from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "../Button";
import { ModalAddCategory } from "../ModalAddCategory";
import { HeaderContainer, BodyContainer } from "./styles";

import "react-toastify/dist/ReactToastify.css";

export const CategoriesList = ({ categoriesList }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const modalRef = useRef(null);

  const handleAddCategory = (data) => {
    if (data.description === "") {
      makeNotification(
        "Forneça um nome ou descrição para a nova categoria!",
        false
      );
    } else {
      api.post("/create/category", data).then((response) => {
        response.status === 200
          ? makeNotification("Categoria adicionada com sucesso!", true)
          : makeNotification(
              "Falha ao adicionar categoria! Por favor, tente mais tarde!",
              false
            );
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalVisibility &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        console.log("opa");
      }
    };

    if (modalVisibility) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalVisibility]);

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
      <HeaderContainer>
        <List
          role="menubar"
          orientation="horizontal"
          sx={{
            maxWidth: "100%",
            minHeight: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: 0,
          }}
        >
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              sx={{ color: "#eee" }}
            >
              Ganhos
            </ListItemButton>
          </ListItem>
          <ListDivider
            sx={{ height: 60, backgroundColor: "#eee", marginTop: 0.5 }}
          />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              sx={{ color: "#eee" }}
            >
              Despesas
            </ListItemButton>
          </ListItem>
        </List>
      </HeaderContainer>
      <BodyContainer>
        <List sx={{ maxWidth: "100%", backgroundColor: "#eee" }}>
          {categoriesList.map((category) => {
            return category.description !== "" ? (
              <ListItem
                key={category.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
                endAction={
                  <IconButton
                    aria-label="Add"
                    size="sm"
                    variant="plain"
                    color="neutral"
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemButton>{category.description}</ListItemButton>
              </ListItem>
            ) : null;
          })}
        </List>
      </BodyContainer>

      <ModalAddCategory
        ref={modalRef}
        isOpen={modalVisibility}
        addCategory={handleAddCategory}
      />

      <Button
        onClick={() => setModalVisibility(true)}
        style={{ width: "18%", margin: "0 auto", marginTop: "1%" }}
      >
        Adicionar Categoria
      </Button>

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
