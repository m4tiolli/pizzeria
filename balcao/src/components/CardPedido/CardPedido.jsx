import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemPedido from "../ItemPedido/ItemPedido";
import "./CardPedido.css";

export default function CardPedido({ pedido }) {
  const navigate = useNavigate();
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  function Verpedido() {
    navigate("/pedido");
  }

  function FinalizarPedido() {
    // Chamada à API para alterar a situação do pedido para "encerrado"
    fetch(`https://pizzeria3.azurewebsites.net/api/pedido/${pedido.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ situacao: "encerrado" })
    })
      .then(response => response.json())
      .then(data => {
        setPedidoFinalizado(true);
      })
      .catch(error => {
        console.error("Erro ao finalizar o pedido:", error);
      });
  }

  return (
    <div className="containerPedido">
      <div className="containerTexto">
        <h2 className="nomeCliente">Alan Santana leão</h2>
        {pedido.itens.map((item, key) => (
          <ItemPedido key={key} item={item}></ItemPedido>
        ))}
        <p className="numeroPedido">pedido Número: {pedido.id}</p>
        <div className="endereço">
          <p>{pedido.endereco.id}</p>
          <p>{pedido.endereco.rua}, {pedido.endereco.numCasa}</p>
          <p>{pedido.endereco.bairro}</p>
          <p>{pedido.endereco.cidade}</p>
          <p>{pedido.tipoPagamento}</p>
        </div>
      </div>
      <div className="buttons-containerPedido">
        <button className="buttonPedido" onClick={Verpedido}>
          Ver Pedido
        </button>
        <button
          className="buttonPedido"
          disabled={pedidoFinalizado}
          onClick={FinalizarPedido}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
