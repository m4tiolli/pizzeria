import Text from '../../assets/text.svg';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import { BsCartPlus } from "react-icons/bs";
//import Header from '../../components/Header/Header'

export default function HeaderInicial() {
    const navigate = useNavigate();

    function mudarDePagina1() {
        navigate("/login")
    }
    function mudarDePagina2() {
        navigate("/register")
    }
    function mudarDePagina3() {
        navigate("/")
    }
    function mudarDePagina4() {
        navigate("/Carrinho")
    }

    const [pizza, setPizza] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;

        if (!value) return;

        const url = `https://pizzeria3.azurewebsites.net/api/produto${value}`

        fetch(url)
            .then((response) => response.json())
            .then((pizza) => setPizza(pizza));

    }

    const [usuarioLogado, setUsuarioLogado] = useState(true)

    

    const toggleUsuarioLogado = () => {
        setUsuarioLogado(!usuarioLogado)
    }

    console.log('Pizza', pizza)
    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={Text} alt="" />
            <div className='buttons1'>
                <div className="blockpesquisa">
                    <FiSearch
                        color='#8e1c1a'
                        className='img'
                        onClick={toggleUsuarioLogado}
                    />
                    <input
                        className="inputPesquisa"
                        type="text"
                        placeholder="search for some pizza..."
                        name='search'
                        id='search'
                        onChange={handleInputChange}
                    />
                    <SearchResults pizza={pizza} />
                </div>
            {usuarioLogado ? (<div className='divCarrinho' onClick={mudarDePagina4}>
                <button className='carrinho'>carrinho</button>
               
                <BsCartPlus
                    className='imgCarrinho'                                                                     
                />
            </div>) : (<div className='buttonsLogin'><button className='signup1' onClick={mudarDePagina2}>sign up</button>
                <button className='signin1' onClick={mudarDePagina1}>sign in</button></div>)}
            </div>
        </div>
    )
}
