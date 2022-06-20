import React from "react";
import styled from "styled-components";

export const ProdContainer = styled.div`
  max-width: 80%;
   margin: 5px;
   padding: 0 15px;
   border: 1px solid black;
   display: flex ;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   row-gap: 10px;
`
export const ProdHeader = styled.div`
  height: 40px;
 
  
`;

export const ProdPhoto = styled.img`
  width: 15rem;
  height: 15rem;
 
`;

export const ProdFooter = styled.div`
  height: 40px;
  
  
`;


class Products extends React.Component {
  render() {
    return (
      <>
      <ProdContainer>
        <ProdHeader>
          <h3>{this.props.nomeProduto}</h3>
        </ProdHeader>

        <ProdPhoto src={this.props.fotoProduto} alt={"Imagem do post"} />

        <ProdFooter>
          <p>Preço: R${this.props.precoProduto},00</p>
        </ProdFooter>
      </ProdContainer>
      </>
    );
  }
}

export default Products;