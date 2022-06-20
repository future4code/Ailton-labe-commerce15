import React from "react";
import styled from "styled-components";
import {Item} from "./Item";

export const CartAll = styled.div`
	border: 1px solid black;
	display: flex;
    flex-direction: column;
	padding: 10px;
`

export class Carrinho extends React.Component {
render() {
	const itens =
		this.props.itensCart &&
		this.props.itensCart.map(item => {
			return <Item
				prodItem={item.name}
				qtdItem={item.qtd}
				onClick={() => this.props.Onclick(item)}
	/>
})
				
return (
<CartAll>
<h3>Carrinho de compras</h3>
<div>{itens}</div>
<p>Valor a pagar: {this.props.total}</p>
</CartAll>)
}
}