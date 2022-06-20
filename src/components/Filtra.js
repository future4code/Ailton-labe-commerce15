import React from "react";
import styled from "styled-components";

export const FiltersContainer = styled.div`
    width: 10%;
  border-right-style: solid;
  border-right-width: thin;
  background-color: #00152c;
  color: white;
  padding: 10px;
 
  
`
   function Filtrar (props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={props.updateQuery}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />

      <span>
         <label for="sort">Ordenação: </label><br></br>
         <select
            name="sort"
            value={props.sortingParameter}
            onChange={props.updateSortingParameter}
         >
            <option value="name">Nome</option>
            <option value="value">Preço</option>
          
         </select>
      </span>

      <select
         name="order"
         value={props.order}
         onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>

   </FiltersContainer>

}

export default Filtrar 