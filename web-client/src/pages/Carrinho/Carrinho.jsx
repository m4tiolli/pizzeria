import './Carrinho.css';
import Header from '../../components/Header/Header';
import ProdutosCarrinho from '../../components/Item2/CompCarrinho';
import { useEffect, useState } from 'react';

function Carrinho() {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        carregarCarrinho();
    }, [])

    function carregarCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        setCarrinho(carrinho);
    }

    return (
        <div id='container'>
            <Header />
            <div className='containerCarrinho1'>
                <h1 className='txtSeusItens'>Seus itens</h1>
                {
                    carrinho?.map((produto, key) => (
                        <ProdutosCarrinho produto={produto} key={key}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Carrinho;