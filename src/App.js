import React from "react";
import './App.css';
import Produto from './components/Card/Produto'


// COMPONENTE PRINCIPAL APP

export class App extends React.Component {
  
  state = {
    lista: 
    [
      {
        id: 1,
        name: "Calcita Amarela",
        value: 40.00,
        imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/fb55eb44-0e1f-4540-8be9-94a9a695170a-copy1-a3a516d8a2113d513916137637620202-1024-1024.jpg",
    
      },
      {
        id: 2,
        name: "Quartzo Verde",
        value: 25.00,
        imageUrl: "https://img.elo7.com.br/product/original/3232B90/quartzo-verde-bruto-tres-unidades-religioso.jpg",
    
      },
      {
        id: 3,
        name: "Ágata Roxa",
        value: 70.00,
        imageUrl: "https://cdn.awsli.com.br/600x450/163/163535/produto/128068792/87fd795a78.jpg",
    
      },
      {
        id: 4,
        name: "Cristal",
        value: 50.00,
        imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/100/529/products/82ef158b-063d-40ef-badd-40d2ed3fb1cb1-94552901724534141916148696052061-1024-1024.jpg",
    
      },
      {
        id: 5,
        name: "Jaspe",
        value: 150.00,
        imageUrl: "https://cf.shopee.com.br/file/68309104a4f39faf2c39b7b58e406570",
    
      },
      {
        id: 6,
        name: "Ametista",
        value: 80.00,
        imageUrl: "https://52863.cdn.simplo7.net/static/52863/sku/cristais-drusa-de-ametista-m-transmutacao-de-energias--p-1591738596162.png",
      },
      {
        id: 7,
        name: "Ônix",
        value: 90.00,
        imageUrl: "https://images.tcdn.com.br/img/img_prod/479726/cristal_pedra_rolada_onix_pacote_com_100g_892_1_20180314111334.jpg",
      },
      {
        id: 8,
        name: "Obsidiana",
        value: 120.00,
        imageUrl: "https://picsum.photos/200/200",
      }
      
  ]
  }

 render() {
  const componentesListaProdutos = this.state.lista.map((produto, index) => {
    return <div key={index}>O nome do produto é {produto.name} e custa {produto.value}</div>
  })
  
  return <div className={"app-container"}>
    <Produto>
    {componentesListaProdutos}
    </Produto>
  </div>
 
}
}

