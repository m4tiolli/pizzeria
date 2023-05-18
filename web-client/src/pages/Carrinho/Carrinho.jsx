import './Carrinho';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

function Carrinho (){
    const navigate = useNavigate();

    function navSelectEnde (){
        navigate("/SelectEnde")
    }
return(
    <div>
        <Header/>
        <h1 className='txtSeusItens'>Seus itens</h1>
        <div className='fundoItens'></div>
        <h1 className='total'>total:</h1>
        <button className='btnFinalizar' onClick={navSelectEnde}>finalizar pagamento</button>
    </div>
);
}

export default Carrinho;