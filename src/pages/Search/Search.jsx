import React from "react";
import Produto from "../../components/Item/CompProdutos";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Search.css";
import { BiArrowBack } from "react-icons/bi";

function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filters, pizza } = location.state || {}; // Recuperar os filtros e pizza do estado da localização

  function filtrarArrayDeObjetos(arrayDeObjetos, arrayDeStrings) {
    if (!arrayDeObjetos || !arrayDeStrings) {
      return []; // Retornar um array vazio se as props não estiverem definidas
    }

    return arrayDeObjetos.filter((objeto) => {
      for (let i = 0; i < arrayDeStrings.length; i++) {
        const string = arrayDeStrings[i];
        const values = Object.values(objeto);
        if (
          values.some(
            (value) => typeof value === "string" && value.includes(string)
          )
        ) {
          return true;
        }
      }
      return false;
    });
  }

  const objetosFiltrados = filtrarArrayDeObjetos(pizza, filters); // Filtrar o array de pizzas usando os filtros selecionados

  return (
    <div>
      <Header />
      <div id="resultsearch">
        <div id="texticon">
          <BiArrowBack
            size={40}
            className="backicon"
            color="#8e1c1c"
            onClick={() => navigate("/Produtos")}
          />
          <p>showing results for: {filters.join(", ")}</p>
        </div>
        <div className="Produtos-Container">
          {objetosFiltrados.map((pizza, index) => (
            <Produto produto={pizza} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
