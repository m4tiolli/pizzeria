import { React, useState } from "react";
import "./CompProduto.css";

function Produto({ pizza, abrirAside }) {

    function handleClick() {
        abrirAside(true);
    }

    return (
        <div className='containerPizza'>
            <img className='imgPizza' src={pizza.imagem} alt="imagem"/>
            <div className="containerTexto">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <div>
                    <h3 className='precoPizza'>{pizza.preco}</h3>
                    <button className="carrinhoCompras" onClick={handleClick}></button>
          
                    <button className="observacoes"></button>
                </div>
            </div>
        </div>

    )

}

export default Produto