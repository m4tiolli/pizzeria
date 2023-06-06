import './Carrinho.css';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Carrinho() {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        carregarCarrinho();
    }, [])

    const navigate = useNavigate();

    function navSelectEnde() {
        navigate("/SelectEnde")
    }

    function carregarCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        setCarrinho(carrinho);
    }

    return (
        <div>
            <Header />
            <div id='container'>
                <h1 className='txtSeusItens'>Seus itens</h1>
                {
                    carrinho?.map((produto, key) => (
                        <h1 key={key}>
                            {produto.nome}
                        </h1>
                    ))
                }
                <div className='fundoItens'></div>
                <h1 className='total'>total:</h1>
                <button className='btnFinalizar' onClick={navSelectEnde}>finalizar pagamento</button>
            </div>
        </div>
    );
}

export default Carrinho;