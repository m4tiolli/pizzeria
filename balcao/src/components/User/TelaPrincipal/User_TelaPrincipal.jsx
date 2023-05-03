import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Produto from '../Pizzas/CompProdutos-module';
import "./User_TelaPrincipal.css";
import logo from "../../../assets/logo.png";

export default function Tela_principal() {
        const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("https://pizzeriatcc.azurewebsites.net/api/pizza", {
            method: "GET",
        })
            .then((response) => response.json())

            .then((json) => {

                setProdutos(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar Produto");
            })});

// SÓ MEXER NO HTML DAQUI PRA BAIXO

    return (
        <div>
            <div className="header">
                <button className=""></button>
                <img src={logo} alt="" className="logo" />
                <h1 className="title">Pizzeria Balcão</h1>
                <button className="buttonTitle"> Delivery </button>
                <button className="buttonTitle"> Pedidos Para Retirar </button>
                <button className="buttonTitle"> Mesas Disponíveis </button>
                <button className="buttonTitle"> Estoque </button>
                <button className="buttonTitle"> Chat </button>
                <button className="buttonTitle"> User </button>
            </div>

            <main align="center">

                <div className="input_pesquisar"><input className="input" type="text" placeholder="Pesquisar item" /></div>
                <div className="pizza-area"></div>
            </main>
            <div id="root"> 
                <div className="Produtos-Container">
                    {
                        
                        produtos.map((pizza, index) => (
                            <Produto pizza={pizza} key={index} />
                        ))

                    }
                </div>
            </div>
        </div>
    )
}