import { React, useState } from "react";
import "./Aside.css";

export default function asidePizza({ pizza }) {

    return (
        <div>
            <img className='imgPizza' src={pizza.imagem} alt="imagem" />
            <div className="containerTexto">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <div>
                    <h3 className='precoPizza'>{pizza.preco}</h3>
                </div>
            </div>
        </div>
    )
}