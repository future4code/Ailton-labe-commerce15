import React from "react";
import styled from "styled-components";

export const CartOne = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export class Item extends React.Component {
render() {
return (
<CartOne>
<p>Quantidade: {this.props.qtdItem}</p>
<p>Produto: {this.props.prodItem}</p>
<button  onClick={this.props.onClickRemover}>Retirar</button>
</CartOne>)
}
}