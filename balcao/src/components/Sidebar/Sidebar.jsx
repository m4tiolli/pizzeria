import React, { useState, useEffect } from "react";
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
  const [mesas, setMesas] = useState([]);
  const [mesaSelecionada, setMesaSelecionada] = useState("");
  const iconStyle = { color: 'white' };

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/Mesa")
      .then((response) => response.json())
      .then((data) => {
        setMesas(data);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar as mesas");
      });
  }, []);

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
      valorTotal += item.valor * item.quantidade;

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

  function AdicionarItemCarrinho(id) {
    const carrinhoAtualizado = carrinho.map((item) => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));

    atualizarCarrinho();
  }

  function RemoverItemCarrinho(id) {
    const carrinhoAtualizado = carrinho
      .map((item) => {
        if (item.quantidade === 1) {
          return undefined;
        }
        if (item.id === id) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      })
      .filter((item) => item !== undefined);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));

    atualizarCarrinho();
  }

  function handleMesaSelecionada(event) {
    setMesaSelecionada(event.target.value);
  }

  return (
    <section id="sidebar">
      <div className="sidebar">
        <div className="informacoes">
          <div className="buttonContainer">
            <button className="limparCarrinho" onClick={LimparCarrinho}>
              <RiDeleteBin5Line size={30} style={iconStyle} />
            </button>
            <button className="fecharCarrinho" onClick={FecharSidebar}>
              <AiFillCloseCircle size={30} style={iconStyle}  />
            </button>
            <button className="buttonFinalizarPedido" onClick={FinalizarPedido}>
              <BsCheckLg size={30} style={iconStyle} />
            </button>
          </div>
          <span>
            Nome do Cliente <input type="text" placeholder="Nome" />
          </span>
          <div className="numeroMesa">
            Mesa{" "}
            <select value={mesaSelecionada} onChange={handleMesaSelecionada}>
              <option value="">Selecione uma mesa</option>
              {mesas.map((mesa) => (
                <option value={mesa.numero} key={mesa.id}>
                  Mesa {mesa.numero}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="produtos flexContainer">
      <div className={`itemContainer ${carrinho?.length === 0 ? "emptyContainer" : ""} ${isSidebarOpen ? "moveItems" : ""} contentContainer`}>
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
              <h3 className="precoPizza">{item.valor * item.quantidade}</h3>
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
                <button
                  className="adicionar"
                  onClick={() => AdicionarItemCarrinho(item.id)}
                >
                  <GrAdd size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
