import logo from '../../assets/Logo.png'
import carrinho from '../../assets/carrinho.png'
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
        navigate("/Pizzas")
    }
    function mudarDePagina5() {
        navigate("bebidas")
    }
    function mudarDePagina6(){
        navigate("sobremesas")
    }
    function mudarDePagina7(){
        navigate("/Carrinho")
    }

    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={logo} alt="" />  
            <div className='buttons2'>
            <button className='pizzas' onClick={mudarDePagina4}>Pizzas</button>
                <button className='sobremesas' onClick={mudarDePagina6}>Sobremesas</button>
                <button className='bebidas' onClick={mudarDePagina5}>Bebidas</button>
            <div className='fundoCarri' onClick={mudarDePagina7}>
                <button className='textCarrinho'>carrinho</button>
                <img src={carrinho} className='iconCarri' alt=""></img>
            </div>
                <button className='signup2' onClick={mudarDePagina2}>sign up</button>
                <button className='signin2' onClick={mudarDePagina1}>sign in</button>              
            </div>
        </div>
    )
}
