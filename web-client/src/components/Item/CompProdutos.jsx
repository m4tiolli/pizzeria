import "./CompProdutos.css";
import { useNavigate } from 'react-router-dom';

function Produto({ produto }) {

    const navigate = useNavigate();

    function navCarrinho(){
        navigate("/Carrinho")
    }

    function AdicionarAoCarrinho() {
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));

        if (!carrinho) {
            carrinho = [];
        }
        carrinho = JSON.stringify([...carrinho, produto])

        localStorage.setItem("carrinho", carrinho);

        alert("teste");

        console.log(carrinho);
    }

    function navAlterar() {
        navigate("/Alterar", { state: { produto: produto } })
    }

    return (
        <div className='containerPizza'>
            <div className="fundoPizza" >
                <img className='imgPizza' onClick={navAlterar} src={`data:image/png;base64,${produto.imagem}`} alt="imagem" />
                <div className="divTexts" onClick={navAlterar}>
                    <h1 className='nomePizza'>{produto.nome}</h1>
                    <h3 className='descricaoPizza' >{produto.descricao}</h3>
                    <h3 className='precoPizza'>R${produto.valor}</h3>
                </div>
                <div className="buttonsPro">
                    <button className='btnAddCart' onClick={() => {AdicionarAoCarrinho(); navCarrinho();}} >add to cart +</button>
                </div>
            </div>
        </div>
    )
}
export default Produto