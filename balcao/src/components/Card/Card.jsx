import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

// {
//   "itens": [
//     {
//         "ProdutoID": 1,
//         "Nome": "Pizza de Frango",
//         "Observacao": "",
//         "Valor": 75,
//         "Quantidade": 3
//     }
// ],
// "valorTotal": 225,
// "situacao": "aberto",
// "tipo": "delivery",
// "endereco": {
//     "id": 1,
//     "idUsuario": 1,
//     "uf": "SP",
//     "cidade": "Cajamar",
//     "bairro": "Portais (Polvilho)",
//     "rua": "Rua das Orquídeas",
//     "numCasa": "108",
//     "cep": "07790-815"
// }
// }

export default function Card({ pedidos }) {
  const navigate = useNavigate();

  function Verpedido() {
    navigate("/pedido");
  }
  const nomesItens = pedidos.itens.map((item) => item.Nome);

  return (
    <div className="containerPedido">
      <div className="containerTexto">
        <h2 className="nomeCliente">{"pedido " + pedidos.id}</h2>
        <h2 className="itensPedidos">
          Orêgano + Batata{nomesItens.map((nome) => nome + ", ")}
        </h2>
        <p className="observacaoPedido">cOM MUITO ORÊGANO E MUITA BATATA</p>
        <p className="numeroPedido">pedido Número: 1</p>
        <p className="endereço">Rua ambrosia número: 2213</p>
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
