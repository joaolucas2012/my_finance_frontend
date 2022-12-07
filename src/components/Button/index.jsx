import { ButtonContainer } from "./styles";

export const Button = (props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};
