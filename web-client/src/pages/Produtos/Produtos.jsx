import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import { useNavigate } from "react-router-dom";
import Produto from '../../components/Item/CompProdutos'
import "./Produtos.css"

export default function Produtos() {
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://pizzeria3.azurewebsites.net/api/pizza", {
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
                    produtos.map((pizza, index) => (
                        <Produto pizza={pizza} key={index} />
                    ))
                }
            </div>
        </div>
    )
}


