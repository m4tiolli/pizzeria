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

  // function NumeroMesa() {
  //   fetch("https://pizzeria3.azurewebsites.net/api/Mesa", {
  //     method: "GET",
  //    })
  //    if(mesa.id ===)
  // }
  
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
        Observacao: item.observacao ?? "",
        Valor: item.valor * item.quantidade,
        Quantidade: item.quantidade,
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

  function AdicionarItemCarrinho(id){
    const carrinhoAtualizado = carrinho.map(item => {

      if (item.id === id) {
        return { ...item, quantidade: item.quantidade + 1  };
      }
      return item;
    });

    carrinho = carrinhoAtualizado;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();
  }

  function RemoverItemCarrinho(id) {

    const carrinhoAtualizado = carrinho.map(item => {

      if (item.quantidade === 1) {
        return undefined;
      }
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    }).filter(item => item !== undefined);;

    carrinho = carrinhoAtualizado;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

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
          Número do pedido <span className="numero"> {/*{pedido.id}*/}</span>
        </span>
        <span className="numeroMesa">
          Mesa <span className="numero"> {/*{mesa.numero}*/} </span>
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
                  onClick={() => RemoverItemCarrinho(item.id)}
                >
                  <MdRemove size={30} />
                </button>
                <h3>{item.quantidade}</h3>
                <button className="adicionar"
                
                onClick={() => AdicionarItemCarrinho(item.id)}>
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
