import React from "react";
import styled from "styled-components";

export const ProdContainer = styled.div`
  border: 2px solid blue;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: pink;
  
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


class Post extends React.Component {
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

export default Post;