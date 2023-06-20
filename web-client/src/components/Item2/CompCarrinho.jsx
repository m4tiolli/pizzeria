import { useState } from "react";
import "./CompCarrinho.css";
import { useNavigate } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';

function ProdutosCarrinho({ produto }) {

    const navigate = useNavigate();

    function navAlterar() {
        navigate("/Alterar", { state: { produto: produto } })
    }
    
    return (
        <div className="tudo">
            <div className='divProdutosCarrinhos' onClick={navAlterar}>
                <img className='imgProduto' src={`data:image/png;base64,${produto?.imagem}`} alt="imagem" />
                <TiDeleteOutline className="apagarItem" size={30}/>
                <div className="divTextCarrinho">
                    <h1 className='txtNomeProduto' >{produto.nome}</h1>
                    <h1 className="txtDescricaoProduto" >{produto.descricao}</h1>
                    <h1 className="txtPrecoProduto" >R${produto.valor},00</h1>
                </div>
            </div>
        </div>
    );
};

export default ProdutosCarrinho;