import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="categories" exact element={<Categories />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
