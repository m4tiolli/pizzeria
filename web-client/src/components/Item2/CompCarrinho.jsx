import { useNavigate } from 'react-router-dom';
import "./CompCarrinho.css";
import { useState, useEffect } from 'react';

function Produto({ pizza, abrirAside, atualizarCarrinho }) {

    const navigate = useNavigate();

    const [observacao, setObeservacao] = useState("");

    function handleClick() {
        AdicionarProduto();
        abrirAside(true);
}

function navAlterar(){
    navigate("/Alterar", {state: {produto: produto}})
}

function AdicionarProduto(){

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
}  return(
    <div className='containerPizza'>
        <div className="fundoPizza">
        <img className='imgPizza' src={`data:image/png;base64,${produto.imagem}`} alt="imagem" />
        <div className="divTexts">
            <h1 className='nomePizza'>{produto.nome}</h1>
            <h3 className='descricaoPizza' >{produto.descricao}</h3>
            <h3 className='precoPizza'>R${produto.valor}</h3>
        </div>
        <div className="buttonsPro">
            <button className="" onClick={handleClick}></button>
            <button className='btnAlterar' onClick={navAlterar}>alterar</button>
        </div>
        </div>
    </div>
);
}
export default Produto;