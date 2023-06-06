import { useState, useEffect } from "react";
import { CategoriesList } from "../components/CategoriesList";
import { Header } from "../components/Header";
import { SideBarHeader } from "../components/SideBarHeader";

import { api } from "../services/api.js";

export const Categories = () => {
  const [listOfCategories, setListOfCategories] = useState([]);

  useEffect(() => {
    api.get("/list/category").then((resp) => {
      setListOfCategories(resp.data.Category.rows);
    });
    2;
  }, []);

  return (
    <>
      <SideBarHeader />
      <Header title="Categorias" />
      <CategoriesList categoriesList={listOfCategories} />
    </>
  );
};
