import './Carrinho.css';
import Header from '../../components/Header/Header';
import ProdutosCarrinho from '../../components/Item2/CompCarrinho';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {RiDeleteBinLine} from 'react-icons/ri';

function Carrinho() {

    const [cart, setCart] = useState([]);

    const cleanCart = () => {
        setCart([]);
        localStorage.removeItem("carrinho")
    }

    const deleteItem = () => {
        setCart(cart.filter((item) => item.id !== id));
        localStorage.setItem("carrinho", JSON.stringify(cart));
    };

    const navigate = useNavigate();

    function navSelectEnde() {
        navigate("/SelectEnde")
    }

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
            <div className='juncao'>
            <h1 className='txtSeusItens'>Seus itens</h1>
            <RiDeleteBinLine size={20} onClick={cleanCart}/>
                <div className='containerCarrinho1'>
                    {
                        carrinho?.map((produto, key) => (
                            
                            <ProdutosCarrinho produto={produto} key={key} />
                        ))
                    }
                </div>
                <div className='fundoItens'>
                    <h1 className='total'>total:</h1>
                    <button className='btnFinalizar' onClick={navSelectEnde}>finalizar pagamento</button>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;