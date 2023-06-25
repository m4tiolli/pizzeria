import React from "react";
import "./ItemPedido.css";

export default function ItemPedido({ item }) {
  return (
    <div>
      <div className="itemEQtdPedido">
        <h2>{item.quantidade} X</h2>
        <h2 className="itensPedidos">{item.nome}</h2>
      </div>
      <p className="observacaoPedido">{item.observacao}</p>
    </div>
  );
}
