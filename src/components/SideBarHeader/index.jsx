import { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import { SideBar } from "../SideBar";

export const SideBarHeader = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <SideBar active={setSidebar} />}
    </Container>
  );
};
