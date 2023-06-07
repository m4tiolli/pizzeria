import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import Produto from '../../components/Item/CompProdutos'
import "./Produtos.css"

export default function Produtos() {
    useEffect(() => {
        fetch("https://pizzeria3.azurewebsites.net/api/produto", {
            method: "GET",
        })

            .then((response) => response.json())
            .then((json) => {
                setProdutos(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar Produto");
            });
    }, []);

    const [produtos, setProdutos] = useState([]);
    return (
        <div id="root">
            <Header />
            <div className="Produtos-Container">
                {
                    produtos.map((produto, index) => (
                        <Produto produto={produto} key={index} />
                    ))
                }
            </div>
        </div>
    )
}


