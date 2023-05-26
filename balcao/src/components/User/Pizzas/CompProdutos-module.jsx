import { React, useEffect, useState } from "react";
import "./CompProduto.css";
import ObservationButton from '../ObservationProduto/ObservationProduto';


function Produto({ pizza, abrirAside, atualizarCarrinho }) {

    const [observacao, setObeservacao] = useState("");

    function handleClick() {
        AdicionarAoCarrinho();
        abrirAside(true);
    }

    function AdicionarAoCarrinho() {
        let carrinho = localStorage.getItem("carrinho");

        if (carrinho == null) {
            carrinho = JSON.stringify([]);
        }

        if(observacao){
            pizza.observacao = observacao;
        }

        carrinho = JSON.parse(carrinho);
        carrinho.push(pizza);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        console.log(carrinho)
        atualizarCarrinho();
    }

    return (
        <div className='containerPizza'>
            <img className='imgPizza' src={`data:image/png;base64,${pizza.imagem}`} alt="imagem" />
            <div className="containerTexto">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <div>
                    <h3 className='precoPizza'>{pizza.preco}</h3>
                    <button className="carrinhoCompras" onClick={handleClick}></button>
                    <ObservationButton obeservacao={observacao} setObeservacao={setObeservacao} className="observacoes" />

                </div>
            </div>
        </div>

    )

}

export default Produto