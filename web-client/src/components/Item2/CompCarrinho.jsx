import { useState } from "react";
import "./CompCarrinho.css";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

function ProdutosCarrinho({ produto, carrinho, setCarrinho }) {
  const navigate = useNavigate();

  const deleteItem = (event) => {
    event.stopPropagation(); // Evita a propagação do evento para o contêiner pai
    const carrinhoAtualizado = carrinho.filter(
      (item) => item.id !== produto.id
    );
    setCarrinho(carrinhoAtualizado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  };

  const navAlterar = () => {
    navigate("/Alterar", {
      state: { produto: { ...produto, quantidade: produto.quantidade } },
    });
  };
  return (
    <div className="tudo">
      <div className="divProdutosCarrinhos" onClick={navAlterar}>
        <img
          className="imgProduto"
          src={`data:image/png;base64,${produto?.imagem}`}
          alt="imagem"
        />
        <TiDeleteOutline
          className="apagarItem"
          onClick={deleteItem}
          size={30}
        />
        <div className="divTextCarrinho">
          <h1 className="txtNomeProduto">{produto.nome}</h1>
          <h1 className="txtDescricaoProduto">{produto.descricao}</h1>
          <div id="infoss">
            <h1 className="txtPrecoProduto">R${produto.valor},00</h1>
            <h1 className="txtQuantidade">x{produto.quantidade}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutosCarrinho;
