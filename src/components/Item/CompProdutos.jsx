import "./CompProdutos.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Produto({ produto }) {

    const navigate = useNavigate();

    const [carrinho, setCarrinho] = useState([])

    function AdicionarAoCarrinho() {
        const item = {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          valor: produto.valor,
          imagem: produto.imagem,
          quantidade: 1,
        };
      
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
      
        if (!carrinho) {
          carrinho = [];
        }
      
        carrinho.push(item); // Adiciona o novo item ao carrinho existente
      
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("Produto adicionado ao carrinho!");
      
        setCarrinho(carrinho); // Atualiza o estado do carrinho
      
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
                    <h3 className='descricaoPizza' >{produto.descricao.length < 26 ? produto.descricao + "..." : produto.descricao.slice(0, 25) + "..."}</h3>
                    <h3 className='precoPizza'>R${produto.valor},00</h3>
                </div>
                <div className="buttonsPro">
                    <button className='btnAddCart' onClick={AdicionarAoCarrinho}>adicionar +</button>
                </div>
            </div>
        </div>
    )
}
export default Produto