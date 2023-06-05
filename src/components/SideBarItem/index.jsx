import { Container } from "./styles";

export const SideBarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};
