import React from 'react'
import './Produto.css'

class Produto extends React.Component {
  state = {
    adicionado: false,
    quantidade: 0
  }

  onClickAdiciona = () => {
   const aumentouQuantidade = this.state.quantidade + 1

    this.setState({
      quantidade: aumentouQuantidade
    })
  }

  onClickSubtrai = () => {
   let diminuiuQuantidade

   if(this.state.adicionado) {
      diminuiuQuantidade = this.state.quantidade - 1
    } 

    this.setState({
      quantidade: diminuiuQuantidade
    })
  }

  render() {

    return <div className={'post-container'}>
      <div className={'post-header'}>
         <p>{this.props.nomeProduto}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoProduto} alt={'Imagem do produto'}/>

      <div className={'post-footer'}>
        <p>{this.props.precoProduto}</p>
      </div>
   </div>
  }
}

export default Produto