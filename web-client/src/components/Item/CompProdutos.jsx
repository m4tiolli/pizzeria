import "./CompProdutos.css";

function Produto({ pizza }){
    return(
        <div className='containerPizza'>
            <div className="fundoPizza">
                <img className='imgPizza' url={pizza.imagem}></img>
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <h3 className='precoPizza'>{pizza.preco}</h3>
            </div>
        </div>
    )
} 
export default Produto