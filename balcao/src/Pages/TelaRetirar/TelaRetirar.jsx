import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdOutlineTableRestaurant, MdOutlineDeliveryDining} from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
import "./TelaRetirar.css"

export default function TelaRetirar( pizza) {
    const navigate = useNavigate();
    const iconStyle = { color: 'white' };

    function Home() {
      navigate("/");
    }
    function Delivery() {
      navigate("/delivery");
    }
    function Mesas() {
      navigate("/mesas");
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
          <button className='buttonTitle' onClick={Home}><AiFillHome size={30} style={iconStyle}/></button>
          <button className="buttonTitle" onClick={Delivery}> <MdOutlineDeliveryDining size={30} style={iconStyle} /> </button>
          <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} style={iconStyle} /> </button>
          <button className="buttonTitle" onClick={Mesas}> <MdOutlineTableRestaurant size={30} style={iconStyle} /> </button>
          <button className="buttonTitle" onClick={User}> <FaRegUser size={30} style={iconStyle} /> </button>
        </div>
        <div style={{ textAlign: 'center' }}>
            <h1>PEDIDOS PARA RETIRAR</h1>
          <button className='buttonFiltro'>Não Visto</button>
          <button className='buttonFiltro'>Pendentes</button>
          <button className='buttonFiltro'>Prontos</button>
        </div>

        <div className='containerPedido'>        
            <div className="containerTexto">
                <h2 className='nomeCliente'>Alan Santana leão</h2>
                <h2 className='itensPedidos'>Orêgano + Batata{/*{pedido.itens}*/}</h2>
                <p className='observacaoPedido'>cOM MUITO ORÊGANO E MUITA BATATA</p>
                <p className='numeroPedido'>pedido Número: 1</p>
                <p className='endereço'>Rua ambrosia número: 2213</p>
            </div>  
            <div className="buttons-containerPedido">
                <button className='buttonPedido'>
                    Ver Pedido
                </button>
                <button className='buttonPedido'>
                    Finalizar pedido
                </button>
            </div>
        </div>
    </div>
</div>
)
}