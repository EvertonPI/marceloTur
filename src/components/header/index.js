import React from "react";
import styled from "styled-components";

const Navegation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid green;
  width: 100%;
  height: 7rem;
  a {
    color: #2f4f4f;
    margin-left: 2rem;
    font-size: 1.9rem;
  }
  a:hover {
    margin-bottom: 1rem;
    transition: margin-bottom 0.5s;
  }
`;
export const Header = () => {
  return (
    <Navegation>
      <div>Logo</div>
      <div> Sobre</div>
      <div> Serviço</div>
      <div> Contato</div>
    </Navegation>
  );
};
