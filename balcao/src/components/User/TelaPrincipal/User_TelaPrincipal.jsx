import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Produto from '../Pizzas/CompProdutos-module';
import Aside from '../Aside/Aside'
import "./User_TelaPrincipal.css";
import logo from "../../../assets/logo.png";

export default function Tela_principal() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

    const [asideOpen, setAsideOpen] = useState(false);

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
            })
    });

    function AtualizarCarrinho() {
        const storage = JSON.parse(localStorage.getItem("carrinho"));

        if (!storage || storage == []) {
            alert("Carrinho vazio");
        }

        setCarrinho(storage);
    }

    // SÓ MEXER NO HTML DAQUI PRA BAIXO

    return (
        <div>
            <div id="root">

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

                    <input className="input" type="text" placeholder="Pesquisar item" />
                    <div className="pizza-area"></div>


                </main>
                <button className='button'>Pizzas</button>
                <button className='button'>Bebidas</button>
                <button className='button'>Aperitivos</button>
                <button className='button'>Promoções</button>
                {asideOpen && <Aside carrinho={carrinho} setAsideOpen={setAsideOpen} atualizarCarrinho={AtualizarCarrinho}>Aside</Aside>}
                <div className="Produtos-Container">
                    {


                        produtos.map((pizza, index) => (
                            <Produto pizza={pizza} key={index} abrirAside={setAsideOpen} atualizarCarrinho={AtualizarCarrinho} />
                        ))

                    }
                </div>
            </div>
        </div>
    )
}