import "./CompProdutos.css";

function Produto({ pizza }){
    return(
        <div className='containerPizza'>
            <div className="fundoPizza">
                <img className='imgPizza' src={pizza.imagem}></img>
            <div className="divTexts">
                <h1 className='nomePizza'>{pizza.nome}</h1>
                <h3 className='descricaoPizza' >{pizza.descricao}</h3>
                <h3 className='precoPizza'>R${pizza.preco}</h3>
            </div>
            <div className="buttonsPro">
                <button className='btnAddCart' >Add to cart</button>
                <button className='btnAlterar' >Alterar</button>
            </div>
            </div>
        </div>
    )
} 
export default Produto