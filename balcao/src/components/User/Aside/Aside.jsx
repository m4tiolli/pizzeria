import { React, useEffect, useState } from "react";
import "./Aside.css";

export default function asidePizza({ carrinho, setAsideOpen, atualizarCarrinho }) {

    function LimparCarrinho() {
        localStorage.removeItem("carrinho");
        atualizarCarrinho();
    }
    function FecharAside() {
        setAsideOpen(false);
    }

    return (
        <div className="aside">
            <button onClick={LimparCarrinho}>Limpar Carrinho</button>
            <button onClick={FecharAside} >Fechar aside</button>
            {carrinho?.map((item, key) => (
            <div className="ContainerPizzas" key={key}>
                <img className='imagePizza' src={`data:image/png;base64,${item.imagem}`} alt="imagem" />

                <div className="Textos">
                    <h1 className='nomePizza'>{item.nome}</h1>
                    <h3 className='descricaoPizza' >{item.descricao}</h3>
                    <h3 className='precoPizza'>{item.preco}</h3>
                    {item.observacao && <h3 className='observacao'>{item.observacao}</h3>}
                    <button className="adicionar"></button>
                    <button className="remover"></button>
                </div>
            </div>
            ))}
            {/* <img className='imgPizza' src={pizza.imagem} alt="imagem" />
            <div className="containerTexto">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <div>
                    <h3 className='precoPizza'>{pizza.preco}</h3>
                </div>
            </div> */}
        </div>
    )
}

