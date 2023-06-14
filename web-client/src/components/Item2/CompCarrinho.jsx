import "./CompCarrinho.css";
import { useNavigate } from 'react-router-dom';

function ProdutosCarrinho({ produto }) {

    const navigate = useNavigate();

    function navSelectEnde() {
        navigate("/SelectEnde")
    }

    return (
    <div className="tudo">
        <div className='divProdutosCarrinhos'>
            <img className='imgProduto' src={`data:image/png;base64,${produto.imagem}`} alt="imagem" />
            <h1 className='txtNomeProduto' src={produto.nome}>
            </h1>
            <h1 className="txtDescricaoProduto" src={produto.descricao}>
            </h1>
            <h1 className="txtPrecoProduto" src={produto.valor}></h1>
        </div>
             <div className='fundoItens'></div>
             <h1 className='total'>total:</h1>
             <button className='btnFinalizar' onClick={navSelectEnde}>finalizar pagamento</button>
    </div>
    );
};

export default ProdutosCarrinho;