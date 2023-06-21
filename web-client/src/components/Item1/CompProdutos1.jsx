import "./CompProdutos1.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Produto1() {
    const navigate = useNavigate();
    
    function AdicionarAoCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));

        if (!carrinho) {
            carrinho = [];
        }
        carrinho = JSON.stringify([...carrinho, produto])

        localStorage.setItem("carrinho", carrinho);
        
    }


    const {state} = useLocation();

    const {produto} = state;

    function navCarrinho(){
        navigate("/Carrinho")
    }

    const [quantidade, setQuantidade] = useState(1);

    const addQuant = () => {
        setQuantidade(quantidade + 1)
    }

    const delQuant = () => {
        setQuantidade(quantidade - 1)
    }

    return (
    <div className='containerPizza1'>
        <img className='imgPizza1' src={`data:image/png;base64,${produto.imagem}`} alt="imagem" />
        <div className="ContainerSemImg">
            <div className="divTexts1">
                <h1 className='nomePizza1'>{produto.nome}</h1>
                <br />
                <h3 className='descricaoPizza1' >{produto.descricao}</h3>
            </div>
            <br />
            <div>
                <h2 className="textOBS">Adicionar alguma observação?</h2>
                <br />
                <input className="inputOBS"
                />
            </div>
            <br />
            <div className="linha"></div>
            <br />
            <div className="buttonsPro1">
                <div className="containerMaisMenos">
                    <button onClick={delQuant} disabled={quantidade < 2} className="btnNotPlus">-</button>
                    <input value={quantidade} type="text" className="inputQuant" />
                    <button onClick={addQuant} className="btnPlus">+</button>
                </div>
                <br />
                <div className="divAdicionar">
                    <button className='btnAdicionar1' onClick={() => {AdicionarAoCarrinho();navCarrinho();console.log(produto)}}>Adicionar</button>
                    <h3 className='precoPizza1'>R${produto.valor * quantidade},00</h3>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Produto1;