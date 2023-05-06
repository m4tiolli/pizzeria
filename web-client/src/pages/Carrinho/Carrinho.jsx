import './Carrinho';
import Header from '../../components/Header/Header';

function Carrinho (){

return(
    <div>
        <Header/>
        <h1 className='txtSeusItens'>Seus itens</h1>
        <div className='fundoItens'></div>
        <h1 className='total'>total:</h1>
        <button className='btnFinalizar'>finalizar pagamento</button>
    </div>
)}

export default Carrinho;