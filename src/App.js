import React from "react";
import Products from "./components/Prod";
import Filtrar from "./components/Filtra";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 99vw;
  max-height: 100vh;
`;

const Header = styled.div`
  background-color: black;
  width: 100%;
  height: 10%;
  display:flex ;
  flex-direction: row;
  align-items: center;
  gap: 10px;

`;

const TituloSite = styled.h1`
color: white;
padding-left: 20px;
`

export const ListContainer = styled.div`
  display: grid;
  max-height: 80%;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

`;

const Main = styled.div`
  display: flex;
  background-color: #808080;
  width: 100%;
  max-height: 85vh;
`;

const DivCarrinho = styled.div`
  height: 80vh;
  width: 15%;
  border-right-style: solid;
  border-right-width: thin;
  background-color: #00152c;
  color: white;
  padding: 10px;
 
`

const Footer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0 10px;
  height: 10%;
  width: 100%;
`;

const arrayProdutos = [
  {
    id: 1,
    name: "Calcita Amarela",
    value: 40.0,
    imageUrl:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/fb55eb44-0e1f-4540-8be9-94a9a695170a-copy1-a3a516d8a2113d513916137637620202-1024-1024.jpg",
  },
  {
    id: 2,
    name: "Quartzo Verde",
    value: 25.0,
    imageUrl:
      "https://img.elo7.com.br/product/original/3232B90/quartzo-verde-bruto-tres-unidades-religioso.jpg",
  },
  {
    id: 3,
    name: "Ágata Roxa",
    value: 70.0,
    imageUrl:
      "https://cdn.awsli.com.br/600x450/163/163535/produto/128068792/87fd795a78.jpg",
  },
  {
    id: 4,
    name: "Cristal",
    value: 50.0,
    imageUrl:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/82ef158b-063d-40ef-badd-40d2ed3fb1cb1-94552901724534141916148696052061-1024-1024.jpg",
  },
  {
    id: 5,
    name: "Jaspe",
    value: 150.0,
    imageUrl: "https://cf.shopee.com.br/file/68309104a4f39faf2c39b7b58e406570",
  },
  {
    id: 6,
    name: "Ametista",
    value: 80.0,
    imageUrl:
      "https://52863.cdn.simplo7.net/static/52863/sku/cristais-drusa-de-ametista-m-transmutacao-de-energias--p-1591738596162.png",
  },
  {
    id: 7,
    name: "Ônix",
    value: 90.0,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/479726/cristal_pedra_rolada_onix_pacote_com_100g_892_1_20180314111334.jpg",
  },
  {
    id: 8,
    name: "Obsidiana",
    value: 120.0,
    imageUrl: "https://cf.shopee.com.br/file/5d7f27d7f3c47c161c95470a691bdd8a",
  },
];

class App extends React.Component {
  state = {
    produtos: arrayProdutos,
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1,
  };

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value,
    });
  };

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value,
    });
  };

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value,
    });
  };

  updateSortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value,
    });
  };

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {
    return (
      <AppContainer>
        <Header><TituloSite>LabeGEM</TituloSite></Header>
        <Main>
          <Filtrar
            query={this.state.query}
            updateQuery={this.updateQuery}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            updateSortingParameter={this.updateSortingParameter}
            updateOrder={this.updateOrder}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            sortingParameter={this.state.sortingParameter}
            order={this.state.order}
          />
          <ListContainer>
            {this.state.produtos
              .filter((prods) => {
                return prods.name
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase());
              })
              .filter((prods) => {
                return (
                  this.state.minPrice === "" ||
                  prods.value >= this.state.minPrice
                );
              })
              .filter((prods) => {
                return (
                  this.state.maxPrice === "" ||
                  prods.value <= this.state.maxPrice
                );
              })
              .sort((currentNumber, nextNumber) => {
                switch (this.state.sortingParameter) {
                  case "name":
                    return (
                      this.state.order *
                      currentNumber.name.localeCompare(nextNumber.name)
                    );
                  default:
                    return (
                      this.state.order *
                      (currentNumber.value - nextNumber.value)
                    );
                }
              })
              .map((p) => {
                return (
                  <Products
                    key={p.id}
                    nomeProduto={p.name}
                    fotoProduto={p.imageUrl}
                    precoProduto={p.value}
                  />
                );
              })}
          </ListContainer>
          <DivCarrinho>Carrinho</DivCarrinho>
        </Main>

        <Footer>Obrigado</Footer>
      </AppContainer>
    );
  }
}

export default App;
