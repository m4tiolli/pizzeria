import "./Carrinho.css";
import Header from "../../components/Header/Header";
import ProdutosCarrinho from "../../components/Item2/CompCarrinho";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCartX } from "react-icons/bs";

function Carrinho() {
  const cleanCart = () => {
    setCarrinho([]);
    localStorage.removeItem("carrinho");
    alert("Carrinho esvaziado!");
    window.location.reload();
  };

  const navigate = useNavigate();

  function navSelectEnde() {
    navigate("/SelectEnde");
  }

  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinho);
  }

  const calculateTotal = () => {
    let total = 0;
    carrinho.forEach((item) => {
      total += item.valor * item.quantidade;
    });
    return total.toFixed(2);
  };

  return (
    <div id="container">
      <Header />
      {carrinho.length > 0 ? (
        <div className="juncao">
          <div className="divTextAndClear">
            <h1 className="txtSeusItens1">your cart</h1>
            <RiDeleteBinLine
              className="esvaziar"
              size={40}
              onClick={cleanCart}
            />
          </div>
          <div className="containerCarrinho1">
            {carrinho.map((produto, key) => (
              <ProdutosCarrinho
                produto={produto}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                key={key}
              />
            ))}
          </div>
          <div className="fundoItens">
            <h1 className="total">total: {calculateTotal()}</h1>
            <button className="btnFinalizar" onClick={navSelectEnde}>
              go to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="carrinhovazio">
          <BsCartX className="empty" size={40} color="#8e1c1c" />
          <h1 className="textempty">your cart is empty.</h1>
          <button className="btnadd" onClick={() => navigate("/Produtos")}>
            add itens to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
