import React from "react";
import "./ItemPedido.css";

export default function ItemPedido({ item }) {
  return (
    <div>
      <div className="itemEQtdPedido">
        <h3>{item.quantidade} X</h3>
        <h3 className="itensPedidos">{item.nome}</h3>
      </div>
      <p className="observacaoPedido">{item.observacao}</p>
    </div>
  );
}
