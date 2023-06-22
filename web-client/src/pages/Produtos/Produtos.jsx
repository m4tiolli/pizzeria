import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Produto from "../../components/Item/CompProdutos";
import "./Produtos.css";
import SideBar from "../../components/SideBar/SideBar";
import Loading from "../../components/Loading/Loading";

export default function Produtos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/produto", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setProdutos(json);
      })
      .then((json) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar Produto");
      });
  }, []);

  const [produtos, setProdutos] = useState([]); 
  return (
    <div id="root">
      <Header pizza={produtos} />
      <SideBar pizza={produtos} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Produtos-Container">
          {produtos.map((produto, index) => (
            <Produto produto={produto} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
