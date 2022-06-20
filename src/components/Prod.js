import React from "react";
import styled from "styled-components";

export const ProdContainer = styled.div`
   margin: 5px;
   padding: 0 15px;
   width: 250px;
`
export const ProdHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  background-color: lightgreen;
`;

export const ProdPhoto = styled.img`
  width: 10rem;
  height: 8rem;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const ProdFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  background-color: lightblue;
`;


class Products extends React.Component {
  render() {
    return (
      <>
      <ProdContainer>
        <ProdHeader>
          <p>{this.props.nomeProduto}</p>
        </ProdHeader>

        <ProdPhoto src={this.props.fotoProduto} alt={"Imagem do post"} />

        <ProdFooter>
          <p>Preço: {this.props.precoProduto}</p>
        </ProdFooter>
      </ProdContainer>
      </>
    );
  }
}

export default Products;