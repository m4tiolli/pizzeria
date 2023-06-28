import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/CompHeader/CompHeader';
import "./TelaDelivery.css";
import CardPedido from "../../components/CardPedido/CardPedido";

export default function TelaDelivery(pizza) {
  const navigate = useNavigate();
  const [pedidosPendentes, setPedidosPendentes] = useState([]);
  const [pedidosFinalizados, setPedidosFinalizados] = useState([]);
  const [mostrarEncerrados, setMostrarEncerrados] = useState(false);

  useEffect(() => {
    carregarPedidosPendentes();
    carregarPedidosFinalizados();
  }, []);

  function carregarPedidosPendentes() {
    fetch("https://pizzeria3.azurewebsites.net/api/pedido", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setPedidosPendentes(json);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar Pedidos Pendentes");
      });
  }

  function carregarPedidosFinalizados() {
    fetch("https://pizzeria3.azurewebsites.net/api/pedido/finalizados", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setPedidosFinalizados(json);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar Pedidos Finalizados");
      });
  }

  function handleMostrarEncerrados() {
    setMostrarEncerrados(true);
  }

  function handleMostrarPendentes() {
    setMostrarEncerrados(false);
  }

  function handleHomeClick() {
    navigate('/');
  }

  function handleDeliveryClick() {
    navigate('/delivery');
  }

  function handleUserClick() {
    navigate('/user');
  }

  const pedidosExibidos = mostrarEncerrados ? pedidosFinalizados : pedidosPendentes;

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
          <button className="buttonFiltro" onClick={handleMostrarPendentes}>
            Pendentes
          </button>
          <button className="buttonFiltro" onClick={handleMostrarEncerrados}>
            Prontos
          </button>
        </div>

        <div className="listaPedidos">
          {pedidosExibidos.map((pedido, key) => (
            <CardPedido pedido={pedido} key={key}></CardPedido>
          ))}
        </div>
      </div>
    </div>
  );
}
