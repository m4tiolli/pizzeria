import "./CompProdutos.css";
import { useNavigate } from 'react-router-dom';

function Produto({ produto }){
    const navigate = useNavigate();

    function navAlterar(){
        navigate("/Alterar")
    }
    return(
        <div className='containerPizza'>
            <div className="fundoPizza">
                <img className='imgPizza' src={`data:imagem/png;base64,${produto.imagem}`}></img>
            <div className="divTexts">
                <h1 className='nomePizza'>{produto.nome}</h1>
                <h3 className='descricaoPizza' >{produto.descricao}</h3>
                <h3 className='precoPizza'>R${produto.valor}</h3>
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