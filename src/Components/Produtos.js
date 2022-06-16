// import React from "react";
// import styled from "styled-components";

// const BoxPrincipal = styled.div`
//   display: grid;
//   grid-template-rows: 3fr 1fr;
//   grid-template-columns: 1fr;
//   border: 1px solid black;
//   align-items: start;
//   justify-items: center;
//   margin: 20px;
//   height: 35vh;
//   width: 80%;
// `

// const ProdutoImg = styled.img`
// height: 100%;
// width: 100%;
// `
// const BotaoCompra = styled.button`
// margin-bottom: 5px;
// `

// class Produtos extends React.Component {
//   state = {
//     valorCarrinho: 0
//   }

//   adicionaCarrinho = () => {
//     const carrinhoSoma = this.state.valorCarrinho + 1;
//     alert("Produto Adicionado ao Carrinho");
//     console.log(this.state.valorCarrinho);

//     this.setState({
//       valorCarrinho: carrinhoSoma

//     });
//   }

//   // removeCarrinho = () => {
//   //   const carrinhoSubtrair = this.state.valorCarrinho -1;
//   //   alert("Produto Removido ao Carrinho")

//   //   this.setState({
//   //     valorCarrinho: carrinhoSubtrair
//   //   });
//   // }
  
//   render() {
//     return (
//       <BoxPrincipal >
//         <ProdutoImg src={this.props.imagem} alt={this.props.textoAlt} />
//         <h4>{this.props.titulo}</h4>
//         <h4>{this.props.preco}</h4>
//         <BotaoCompra onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</BotaoCompra>
//       </BoxPrincipal>
//     );
//   };
// };

// export default Produtos;
