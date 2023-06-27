import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/CompHeader/CompHeader';
// import {
//   MdOutlineDeliveryDining,
// } from "react-icons/md";
import "./TelaDelivery.css";
import CardPedido from "../../components/CardPedido/CardPedido";

export default function TelaDelivery(pizza) {
  const navigate = useNavigate();
  const iconStyle = { color: "white" };

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/pedido", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setPedidos(json);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar Produto");
      });
  }, []);

  console.log(pedidos)

  function Verpedido() {
    navigate("/pedido");
  }
  function handleHomeClick() {
    navigate('/');
  }

  function handleDeliveryClick() {
    navigate('/delivery');
  }

  function handleRetirarClick() {
    navigate('/retirar');
  }

  function handleUserClick() {
    navigate('/user');
  }
  return (
    <div>
      <div id="root">
      <Header
        onHomeClick={handleHomeClick}
        onDeliveryClick={handleDeliveryClick}
        showCartButton={false}
        onUserClick={handleUserClick}
      />

        <div style={{ textAlign: "center" }}>
          <h1>PEDIDOS</h1>
          <button className="buttonFiltro">Não Visto</button>
          <button className="buttonFiltro">Pendentes</button>
          <button className="buttonFiltro">Prontos</button>
        </div>

        <div className="listaPedidos">
          {pedidos.map((pedido, key) => (
            <CardPedido pedido={pedido} key={key}></CardPedido>
          ))}
        </div>
      </div>
    </div>
  );
}
