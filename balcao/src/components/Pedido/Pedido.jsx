import React from "react";
import "./Pedido.css";

export default function Pedido() {
  return (
    <section className="sidebarPedido">
      <div children="sidebarPedido">
        <div className="containerInfo">
          <span className="infoItem">
            Número pedido: <span className="secundario">2</span>
          </span>
          <span className="infoItem">
            Nome do Cliente: <span className="secundario">Lourival Cícero</span>
          </span>
          <span className="infoItem">
            Código: <span className="secundario">03</span>
          </span>
        </div>
        <div className="containerInfoPedido">
          <span className="quantidade">Qtd</span>
          <span className="itens">Item</span>
          <span className="valor">Valor</span>
        </div>
        <div className="itens"> </div>
      </div>
    </section>
  );
}
