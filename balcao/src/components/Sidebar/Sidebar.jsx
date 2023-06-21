import React from "react";
import { GrAdd } from "react-icons/gr";
import { MdRemove } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import "./Sidebar.css";

export default function SidebarPizza({
  carrinho,
  setSidebarOpen,
  atualizarCarrinho,
  isSidebarOpen,
}) {
  function LimparCarrinho() {
    localStorage.removeItem("carrinho");
    atualizarCarrinho();
  }

  function FecharSidebar() {
    setSidebarOpen(false);
  }

  function FinalizarPedido() {
    console.log(carrinho);
    let valorTotal = 0;
    let itens = [];

    carrinho.forEach((item) => {
      valorTotal += item.valor; // * item.quantidade;

      itens.push({
        ProdutoID: item.id,
        Nome: item.nome,
        Observacao: "",
        Valor: item.valor,
        Quantidade: 1,
      });
    });

    const pedido = {
      itens,
      valorTotal,
      situacao: "aberto",
    };

    fetch("https://pizzeria3.azurewebsites.net/api/pedido", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    })
      .then((response) => {
        alert("Pedido criado com sucesso");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao criar pedido");
      });
  }

  function RemoverItemCarrinho(index) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    atualizarCarrinho();
  }

  return (
    <section id="sidebar">
      <div className="sidebar">
        <div className="buttonContainer">
          <button className="limparCarrinho" onClick={LimparCarrinho}>
            <RiDeleteBin5Line size={30} />
          </button>
          <button className="fecharCarrinho" onClick={FecharSidebar}>
            <AiFillCloseCircle size={30} />
          </button>
          <button className="buttonFinalisarPedido" onClick={FinalizarPedido}>
            <BsCheckLg size={30} />
          </button>
        </div>
        <span className="numeroPedido">
          Número do pedido <span className="numero"> 1</span>
        </span>
        <span className="numeroMesa">
          Mesa <span className="numero">5</span>
        </span>
      </div>
      <div className={`itemContainer ${isSidebarOpen ? "moveItems" : ""}`}>
        {carrinho?.map((item, index) => (
          <div className="ContainerPizzas" key={index}>
            <img
              className="imagePizza"
              src={`data:image/png;base64,${item.imagem}`}
              alt="imagem"
            />

            <div className="Textos">
              <h1 className="nomePizza">{item.nome}</h1>
              <h3 className="descricaoPizza">{item.descricao}</h3>
              <h3 className="precoPizza">{item.valor}</h3>
              {item.observacao && (
                <h3 className="observacao">{item.observacao}</h3>
              )}
              <div className="buttonContainer">
                <button
                  className="remover"
                  onClick={() => RemoverItemCarrinho(index)}
                >
                  <MdRemove size={30} />
                </button>
                <h3>1</h3>
                <button className="adicionar">
                  <GrAdd size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
