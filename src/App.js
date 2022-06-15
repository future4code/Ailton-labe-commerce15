import React from "react";
import styled from "styled-components";
import Produtos from "./Components/Produtos";
import Diamante from "./img/diamante.png"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  
`;
const Header = styled.div`
  background-color: black;
  width: 100vw;
  height: 15%;
  display:flex ;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  `;

const TituloSite = styled.h1`
color: white;
padding-left: 20px;
`
const ImagemTitulo = styled.img`
width: 30px;
height: 30px;

`

const Footer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
  height: 10%;
  
`;

const Main = styled.main`
  min-height: 80%;
  display: flex;
  background-color: #808080;
`;

const Filters = styled.div`
  width: 10%;
  border-right-style: solid;
  border-right-width: thin;
  background-color: #00152c;
  color: white;
  padding: 10px;
 
`;

const InputFilters = styled.input`
width: 100px;

`

const Products = styled.div`
  width: 25%;
  background-color: #808080;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

const ShoppingCart = styled.div`

  width: 20%;
  border-right-style: solid;
  border-right-width: thin;
  color: white;
  padding: 10px;
  background-color: #00152c;
 
`;
const ShoppingCartItem = styled.div``;

function App() {
  return (
    <Container>
      <Header>
        <TituloSite>LabeGEMS</TituloSite>
        <ImagemTitulo src={Diamante} textoAlt={"imagemLogo"}></ImagemTitulo>
        
        </Header>

      <Main>
        <Filters>
          <ul>
            <li>FILTROS</li>
            <InputFilters type="number" placeholder="Valor Minimo"></InputFilters>
            <InputFilters type="number" placeholder="Valor Maximo"></InputFilters>
            <InputFilters placeholder="Nome do produtos"></InputFilters>
          </ul>
        </Filters>
        <Products>
          <Produtos
            imagem={"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/fb55eb44-0e1f-4540-8be9-94a9a695170a-copy1-a3a516d8a2113d513916137637620202-1024-1024.jpg"}
            textoAlt={"imagem1"}
            titulo={"Calcita Amarela"}
            preco={"R$: 30,00"}
          />
          <Produtos
            imagem={"https://img.elo7.com.br/product/original/3232B90/quartzo-verde-bruto-tres-unidades-religioso.jpg"}
            textoAlt={"imagem2"}
            titulo={"Quartzo Verde"}
            preco={"R$: 15,00"}
          />
          <Produtos
            imagem={"https://cdn.awsli.com.br/600x450/163/163535/produto/128068792/87fd795a78.jpg"}
            textoAlt={"imagem3"}
            titulo={"Ágata Roxa"}
            preco={"R$: 70,00"}
          />
          <Produtos
            imagem={"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/82ef158b-063d-40ef-badd-40d2ed3fb1cb1-94552901724534141916148696052061-1024-1024.jpg"}
            textoAlt={"imagem4"}
            titulo={"Cristal"}
            preco={"R$: 50,00"}
          />
          <Produtos
            imagem={"https://cf.shopee.com.br/file/68309104a4f39faf2c39b7b58e406570"}
            textoAlt={"imagem5"}
            titulo={"Jaspe"}
            preco={"R$: 150,00"}
          />
          <Produtos
            imagem={"https://52863.cdn.simplo7.net/static/52863/sku/cristais-drusa-de-ametista-m-transmutacao-de-energias--p-1591738596162.png"}
            textoAlt={"imagem6"}
            titulo={"Ametista"}
            preco={"R$: 70,00"}
          />
          <Produtos
            imagem={"https://images.tcdn.com.br/img/img_prod/479726/cristal_pedra_rolada_onix_pacote_com_100g_892_1_20180314111334.jpg"}
            textoAlt={"imagem7"}
            titulo={"Ônix"}
            preco={"R$: 90,00"}
          />
          <Produtos
            imagem={"https://cf.shopee.com.br/file/5d7f27d7f3c47c161c95470a691bdd8a"}
            textoAlt={"imagem8"}
            titulo={"Obsidiana"}
            preco={"R$: 110,00"}
          />
        </Products>
        <ShoppingCart>
          <h1>CARRINHO</h1>
          <ShoppingCartItem></ShoppingCartItem>
        </ShoppingCart>
      </Main>

      <Footer></Footer>
    </Container>
  );
}

export default App;
