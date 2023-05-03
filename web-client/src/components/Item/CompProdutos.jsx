import "./CompProdutos.css";

function Produto({ pizza }){
    return(
        <div className='containerPizza'>
            <div className="fundoPizza">
                <img className='imgPizza' src={pizza.imagem}></img>
            <div>
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
            <div>
                <h3 className='precoPizza'>{pizza.preco}</h3>
                <button></button>
            </div>
            </div>
            </div>
        </div>
    )
} 
export default Produto