import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { DateContainer } from "../components/DateContainer";
import { DataContainer } from "../components/DataContainer";
import { CategoryContainer } from "../components/CategoryContainer";
import { InputContainer } from "../components/InputContainer";
import { InfoTable } from "../components/InfoTable";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <>
      <Header />
      <Information>
        <DateContainer title={"Data Inicial"} />
        <DateContainer title={"Data Final"} />
        <Button>Buscar</Button>
        <DataContainer title={"Receita"} value={"10000"} />
        <DataContainer title={"Despesas"} value={"112"} />
        <DataContainer title={"Balanço"} value={"9888"} />
      </Information>

      <Information>
        <DateContainer title={"Data"} />
        <CategoryContainer title={"Categoria"}>
          <option value="Ganho">Ganho</option>
          <option value="Despesas">Despesas</option>
        </CategoryContainer>
        <InputContainer title={"Título"} />
        <InputContainer title={"Valor"} />
        <Button>Adicionar</Button>
      </Information>

      <InfoTable />
    </>
  );
};
