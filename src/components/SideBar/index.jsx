import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaChartBar } from "react-icons/fa";

import { SideBarItem } from "../SideBarItem";

export const SideBar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SideBarItem Icon={FaHome} Text="Home" />
        <SideBarItem Icon={FaChartBar} Text="Categorias" />
      </Content>
    </Container>
  );
};
