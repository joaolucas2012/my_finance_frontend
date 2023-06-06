import { useState, useEffect } from "react";
import { CategoriesTable } from "../components/CategoriesTable";
import { Header } from "../components/Header";
import { SideBarHeader } from "../components/SideBarHeader";
import { api } from "../services/api.js";

export const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    api.get("/list/category").then((resp) => {
      setCategoriesList(resp.data.Category.rows);
    });
  }, []);

  return (
    <>
      <SideBarHeader />
      <Header title="Categorias" />
      <CategoriesTable categoriesList={categoriesList} />
    </>
  );
};
