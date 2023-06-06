import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.6s;

  > svg {
    position: fixed;
    color: white;
    width: 25px;
    height: 25px;
    margin-top: 18px;
    margin-left: 18px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
