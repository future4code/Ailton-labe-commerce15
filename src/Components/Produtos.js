import React from "react";
import styled from "styled-components";

export const BoxPrincipal = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border: 1px solid black;
  align-items: start;
  justify-items: center;
  margin: 20px;
  height: 35vh;
  width: 80%;
`

export const ProdutoImg = styled.img`
height: 100%;
width: 100%;
`
export const BotaoCompra = styled.button`
margin-bottom: 5px;
`

const Produtos = (props) => {
  function AdicionaCarrinho() {
    alert("Produto Adicionado ao Carrinho");
    
  }
  console.log(props.variavel);
  return (
    <BoxPrincipal >
      <ProdutoImg src={props.imagem} alt={props.textoAlt} />
      <h4>{props.titulo}</h4>
      <h4>{props.preco}</h4>
      <BotaoCompra onClick={AdicionaCarrinho}>Adicionar ao Carrinho</BotaoCompra>
    </BoxPrincipal>
  );
};

export default Produtos;
