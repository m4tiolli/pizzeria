import "./CompProdutos.css";
import { useNavigate } from 'react-router-dom';

function Produto({ pizza }){
    const navigate = useNavigate();

    function navAlterar(){
        navigate("/Alterar")
    }
    return(
        <div className='containerPizza'>
            <div className="fundoPizza">
                <img className='imgPizza' src={`data:image/png;base64,${pizza.imagem}`}></img>
            <div className="divTexts">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <h3 className='precoPizza'>R${pizza.preco}</h3>
            </div>
            <div className="buttonsPro">
                <button className='btnAddCart' >add to cart +</button>
                <button className='btnAlterar' onClick={navAlterar}>alterar</button>
            </div>
            </div>
        </div>
    )
} 
export default Produto