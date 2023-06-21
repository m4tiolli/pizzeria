import "./CompProdutos.css";
import { useNavigate } from 'react-router-dom';

function Produto({ produto }) {

    const navigate = useNavigate();

    function AdicionarAoCarrinho() {

        const item = {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            valor: produto.valor,
            imagem: produto.imagem,
            quantidade: 1
        }

        let carrinho = JSON.parse(localStorage.getItem("carrinho"));

        if (!carrinho) {
            carrinho = [];
        }
        carrinho = JSON.stringify([...carrinho, item])

        localStorage.setItem("carrinho", JSON.stringify([item]));
        alert("Produto adicionado ao carrinho!");
        navigate("/Carrinho")
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
                    <h3 className='precoPizza'>R${produto.valor},00</h3>
                </div>
                <div className="buttonsPro">
                    <button className='btnAddCart' onClick={AdicionarAoCarrinho}>add to cart +</button>
                </div>
            </div>
        </div>
    )
}
export default Produto