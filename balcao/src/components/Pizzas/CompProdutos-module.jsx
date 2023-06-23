import { React, useEffect, useState } from "react";
import { MdAddShoppingCart } from 'react-icons/md';
import "./CompProduto.css";

import ObservationButton from '../ObservationProduto/ObservationProduto';


function Produto({ pizza, abrirSidebar, atualizarCarrinho }) {

    const [observacao, setObeservacao] = useState("");

    function handleClick() {
        AdicionarAoCarrinho();
        abrirSidebar(true);
    }

    function AdicionarAoCarrinho() {
        let carrinho = localStorage.getItem("carrinho");

        if (carrinho == null) {
            carrinho = JSON.stringify([]);
        }

        if (observacao) {
            pizza.observacao = observacao;
        }

        carrinho = JSON.parse(carrinho);

        const produtoJaExiste = carrinho.some(produto => produto.id === pizza.id);
        if (produtoJaExiste) {
            const carrinhoAtualizado = carrinho.map(item => {
                if (item.id === pizza.id) {

                    return { ...item, quantidade: item.quantidade + 1 };
                }
                return item;
            });

            carrinho = carrinhoAtualizado;

        }
        else {
            pizza.quantidade = 1;
            carrinho.push(pizza);
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        console.log(carrinho)
        atualizarCarrinho();
    }

    return (
        <div className='containerPizza'>
            <img className='imgPizza' src={`data:image/png;base64,${pizza.imagem}`} alt="imagem" />
            <div className="containerTexto">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza'>{pizza.descricao}</h3>
                <h3 className='precoPizza'>{pizza.valor}</h3>
                <div className="buttons-container">
                    <button className="carrinhoCompras" onClick={handleClick}>
                        <MdAddShoppingCart size={30} />
                    </button>
                    <ObservationButton obeservacao={observacao} setObeservacao={setObeservacao} className="observacoes" />
                </div>
            </div>
        </div>



    )
}

export default Produto