import React from "react";
import { useNavigate } from "react-router-dom";
import ItemPedido from "../ItemPedido/ItemPedido";

export default function CardPedido({ pedido }) {
  const navigate = useNavigate();
  function Verpedido() {
    navigate("/pedido");
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
          <p>{pedido.endereco.rua}, {pedido.endereco.numCasa}</p>
          <p>{pedido.endereco.bairro}</p>
          <p>{pedido.endereco.cidade}</p>
        </div>
      </div>
      <div className="buttons-containerPedido">
        <button className="buttonPedido" onClick={Verpedido}>
          Ver Pedido
        </button>
        <button className="buttonPedido">Finalizar pedido</button>
      </div>
    </div>
  );
}
