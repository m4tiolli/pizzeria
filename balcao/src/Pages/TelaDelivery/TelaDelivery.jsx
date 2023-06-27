import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
// import {
//   MdOutlineDeliveryDining,
// } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi"
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
  function Home() {
    navigate("/");
  }
  function Delivery() {
    navigate("/delivery");
  }
  function Retirar() {
    navigate("/retirar");
  }
  function User() {
    navigate("/user");
  }
  return (
    <div>
      <div id="root">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <h1 className="title">Pizzeria Balcão</h1>
          <button className="buttonTitle" onClick={Home}>
            <AiFillHome size={30} style={iconStyle} />
          </button>
          <button className="buttonTitle" onClick={Delivery}> <BiReceipt size={30} style={iconStyle} /> </button>

          <button className="buttonTitle" onClick={Retirar}>
            {" "}
            <BsFillBagCheckFill size={30} style={iconStyle} />{" "}
          </button>
          <button className="buttonTitle" onClick={User}>
            {" "}
            <FaRegUser size={30} style={iconStyle} />{" "}
          </button>
        </div>
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
