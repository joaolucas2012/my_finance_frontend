import { useState, useEffect } from "react";
import { DateContainer } from "../DateContainer";
import { CategoryContainer } from "../CategoryContainer";
import { InputContainer } from "../InputContainer";
import { Button } from "../Button";
import { api } from "../../services/api.js";
import { Information } from "./styles";

export const AddFinanceContainer = ({ postItems }) => {
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    api.get("http://localhost:8080/list/category/0").then((response) => {
      // var array = response.data["Category"].rows;
      // for (let i = 0; i < array.length; i++) {
      //   console.log(`${array[i].id}, ${array[i].description}`);
      // }
      setCategoryName(response.data["Category"].rows);
    });
  }, []);

  const submitItems = () => {
    const data = {
      date,
      categoryId,
      title,
      value,
    };
    postItems({ data });
  };

  return (
    <Information>
      <DateContainer
        title={"Data"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <CategoryContainer
        title={"Categoria"}
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {categoryName.map((category) => (
          <option key={category.id} value={category.id}>
            {category.description}
          </option>
        ))}
      </CategoryContainer>
      <InputContainer
        title={"Título"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputContainer
        title={"Valor"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={submitItems}>Adicionar</Button>
    </Information>
  );
};
