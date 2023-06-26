import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  MdOutlineTableRestaurant,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import "./TelaRetirar.css";
import Card from "../../components/Card/Card";

export default function TelaRetirar(pizza) {
  const navigate = useNavigate();
  const iconStyle = { color: "white" };

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

  //Pedidos para retirar
  const[pedido, setPedido] = useState([]);

  useEffect(() => {
    fetch('https://pizzeria3.azurewebsites.net/api/pedido', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => setPedido(json))
      .catch((err) => {
        console.log(err);
        alert('Erro ao buscar pedidos');
      })
  }, []);


  return (
    <div>
      <div id="root">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <h1 className="title">Pizzeria Balcão</h1>
          <button className="buttonTitle" onClick={Home}>
            <AiFillHome size={30} style={iconStyle} />
          </button>
          <button className="buttonTitle" onClick={Delivery}>
            {" "}
            <MdOutlineDeliveryDining size={30} style={iconStyle} />{" "}
          </button>
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
          <h1>PEDIDOS PARA RETIRAR</h1>
          <button className="buttonFiltro">Não Visto</button>
          <button className="buttonFiltro">Pendentes</button>
          <button className="buttonFiltro">Prontos</button>
        </div>
        {
          pedido.map((pedidos, index) => (
            <Card
              key={index}
              pedidos={pedidos}
            />
          ))
        }
      </div>
    </div>
  );
}
