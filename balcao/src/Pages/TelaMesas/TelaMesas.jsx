import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {MdOutlineDeliveryDining, MdOutlineTableRestaurant} from"react-icons/md";
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import "./TelaMesas.css"

export default function TelaMesas (pizza) {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [observacao, setObeservacao] = useState("");

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
          <button className="buttonTitle" onClick={Home}> <AiFillHome size={30}/> </button>
          <button className="buttonTitle" onClick={Delivery}> <MdOutlineDeliveryDining size={30} /> </button>
          <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} /> </button>
          <button className="buttonTitle" onClick={User}> <FaRegUser size={30} /> </button>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h1>MESAS PARA COMER NO LOCAL</h1>
          <button className='buttonFiltro'>DISPONÍVEL</button>
          <button className='buttonFiltro'>INDISPONÍVEL</button>
        </div>

        <div className='containerMesas'>
            <div className='mesas'>
                <h1><MdOutlineTableRestaurant size={50}/> Mesa 1</h1>
            </div>       
            <div className="buttons-containerMesas">
                <button className='buttonMesas'>
                    Abrir Pedido
                </button>
            </div>
        </div>
    </div>
</div>
)
}