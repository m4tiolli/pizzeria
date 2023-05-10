import Text from '../../assets/text.svg';
import carrinho from '../../assets/carrinho.png';
import './Header.css';
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
    function mudarDePagina4(){
        navigate("/Carrinho")
    }

    return (

        <div className='header'>
            <img className='img' onClick={mudarDePagina3} src={Text} alt="" />
            <div className='buttons1'>
                    <div className="blockpesquisa">
                        <img  className="imgpesquisa" alt="" />
                        <input
                        className="inputpesquisa"
                        type="text"
                        placeholder="search for some pizza..."
                        />
                    </div>
                <div className='divCarrinho' onClick={mudarDePagina4}>
                <button className='carrinho'>carrinho</button>
                <img className='imgCarrinho' src={carrinho}></img>
                </div>
                <button className='signup1' onClick={mudarDePagina2}>sign up</button>
                <button className='signin1' onClick={mudarDePagina1}>sign in</button>
          
        </div>
        </div>
    )
}
