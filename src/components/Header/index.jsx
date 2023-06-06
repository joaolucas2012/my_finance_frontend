import { StyledHeader, StyledH2 } from "./styles";

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledH2>{title}</StyledH2>
    </StyledHeader>
  );
};
