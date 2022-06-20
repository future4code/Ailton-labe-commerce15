import React from "react";
import styled from "styled-components";

export const FiltersContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
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
         <label for="sort">Ordenação: </label>
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