import "./Alterar.css";
import { useState, useEffect } from 'react';
import Produto1 from '../../components/Item1/CompProdutos1'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";

function Alterar() {

    const navigate = useNavigate();
    const location = useLocation();
    const produto = location.state.produto;

    const [ quantidade, setQuantidade ] = useState(1)

    

    function navCarrinho() {
        navigate("/Carrinho")
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="Produtos-Container">
                <Produto1 produto={produto} />
            </div>
        </div>
    );
}

export default Alterar;