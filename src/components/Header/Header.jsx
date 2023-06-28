import Text from '../../assets/text.svg';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import { BsCartPlus } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';
import { ChecarLoginUsuario, DadosUsuario } from '../AuthContext';
import { useEffect } from 'react';

export default function HeaderInicial({ pizza }) {
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
    function mudarDePagina5() {
        navigate("/InfoUser")
    }

    const [texto, setTexto] = useState([]);

    const handleTextChange = (event) => {
        const value = event.target.value;
        setTexto((prevFilters) => [...prevFilters, value]);
    };

    const [ usuario, setUsuario ] = useState()

    async function ValidarLogin(){
        const login = await ChecarLoginUsuario();
        if(login == true){
            setUsuarioLogado(true)
        } else {
            setUsuarioLogado(false)
        }
    }

    document.addEventListener("DOMContentLoaded", ValidarLogin());

    const [usuarioLogado, setUsuarioLogado] = useState()
    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={Text} alt="" />
            <div className='buttons1'>
                <div className="blockpesquisa">
                    <FiSearch
                        color='#8e1c1a'
                        className='img'
                        onClick={() => navigate("/Search", { state: { filters: texto, pizza: pizza } })}
                    />
                    <input
                        className="inputPesquisa"
                        type="text"
                        placeholder="procurando por alguma pizza..."
                        name='search'
                        id='search'
                        onBlur={handleTextChange}
                    />
                </div>
                {usuarioLogado ? (
                    <div className='divCarrinhoAndUSer'>
                        <div className='divCarrinho' onClick={mudarDePagina4}>
                            <button className='carrinho'>carrinho</button>
                            <BsCartPlus className='imgCarrinho' />
                        </div>
                        <div className='divImgUser'>
                            <FaUserCircle onClick={mudarDePagina5} className='imgUser' size={50} />
                        </div>
                    </div>
                ) : (

                    <div className='buttonsLogin'><button className='signup1' onClick={mudarDePagina2}>cadastrar</button>
                        <button className='signin1' onClick={mudarDePagina1}>entrar</button></div>
                )}

            </div>
        </div>
    )
}
