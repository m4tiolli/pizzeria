import logo from '../../assets/Logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom';
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

    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={logo} alt="" />
            <div className='buttons1'>
                <button className='signup1' onClick={mudarDePagina2}>sign up</button>
                <button className='signin1' onClick={mudarDePagina1}>sign in</button>
            </div>
        </div>
    )
}
