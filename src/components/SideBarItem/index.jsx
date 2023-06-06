import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const SideBarItem = ({ Icon, Text, route }) => {
  const navigate = useNavigate();

  const goToCategories = () => {
    navigate(`${route}`);
  };

  return (
    <Container onClick={goToCategories}>
      <Icon />
      {Text}
    </Container>
  );
};
