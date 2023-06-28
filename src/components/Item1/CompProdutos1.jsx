import "./CompProdutos1.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Produto1() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { produto } = state;
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  function AdicionarAoCarrinho() {
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    if (produtoExistente) {
      const carrinhoAtualizado = carrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...item, quantidade: item.quantidade + quantidade };
        }
        return item;
      });

      localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    } else {
      const item = {
        id: produto.id,
        nome: produto.nome,
        descricao: produto.descricao,
        valor: produto.valor,
        imagem: produto.imagem,
        quantidade: quantidade,
      };

      const carrinhoAtualizado = [...carrinho, item];

      localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    }

    navigate("/Carrinho");
  }

  const addQuant = () => {
    setQuantidade(quantidade + 1);
  };

  const delQuant = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="containerPizza1">
      <img
        className="imgPizza1"
        src={`data:image/png;base64,${produto.imagem}`}
        alt="imagem"
      />
      <div className="ContainerSemImg">
        <div className="divTexts1">
          <h1 className="nomePizza1">{produto.nome}</h1>
          <br />
          <h3 className="descricaoPizza1">{produto.descricao}</h3>
        </div>
        <br />
        <div>
          <h2 className="textOBS">Adicionar alguma observação?</h2>
          <br />
          <input className="inputOBS" />
        </div>
        <br />
        <div className="linha"></div>
        <br />
        <div className="buttonsPro1">
          <div className="containerMaisMenos">
            <button
              onClick={delQuant}
              disabled={quantidade < 2}
              className="btnNotPlus"
            >
              -
            </button>
            <input value={quantidade} type="text" className="inputQuant" />
            <button onClick={addQuant} className="btnPlus">
              +
            </button>
          </div>
          <br />
          <div
            className="divAdicionar"
            onClick={() => {
              AdicionarAoCarrinho();
              navigate("/Carrinho");
            }}
          >
            <button className="btnAdicionar1">Adicionar</button>
            <h3 className="precoPizza1">R${produto.valor * quantidade},00</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto1;
