import logo from '../../assets/Logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom';
//import Header from '../../components/Header/Header'

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
    function mudarDePagina4() {
        navigate("pizzas")
    }
    function mudarDePagina5() {
        navigate("bebidas")
    }
    function mudarDePagina6(){
        navigate("sobremesas")
    }

    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={logo} alt="" />  
            <div className='buttons2'>
            <button className='pizzas' onClick={mudarDePagina4}>Pizzas</button>
                <button className='sobremesas' onClick={mudarDePagina6}>Sobremesas</button>
                <button className='bebidas' onClick={mudarDePagina5}>Bebidas</button>
                <button className='carrinho' onClick={mudarDePagina5}>carrinho</button>
                <button className='signup' onClick={mudarDePagina1}>sign up</button>
                <button className='signin' onClick={mudarDePagina2}>sign in</button>              
            </div>
        </div>
    )
}
