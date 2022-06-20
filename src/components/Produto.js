import React from "react";
import styled from "styled-components";

export const ProdContainer = styled.div`
  margin: 3px solid red;
`
export const ProdHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

export const ProdPhoto = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ProdFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
`;


class Post extends React.Component {
  render() {
    return (
      <ProdContainer>
        <ProdHeader>
          <p>{this.props.nomeProduto}</p>
        </ProdHeader>

        <ProdPhoto src={this.props.fotoProduto} alt={"Imagem do post"} />

        <ProdFooter>
          <p>Preço: {this.props.precoProduto}</p>
        </ProdFooter>
      </ProdContainer>
    );
  }
}

export default Post;