import logo from '../../assets/Logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
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
    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={logo} alt="" />
            <div className='buttons'>
                <button className='signup' onClick={mudarDePagina1}>Cadastrar</button>
                <button className='signin' onClick={mudarDePagina2}>Entrar</button>
            </div>
        </div>
    )
}