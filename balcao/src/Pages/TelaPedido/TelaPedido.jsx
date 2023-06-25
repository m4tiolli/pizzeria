import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MdOutlineTableRestaurant, MdOutlineDeliveryDining } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import Pedido from "../../components/Pedido/Pedido";
import logo from '../../assets/logo.png';

export default function TelaPedido() {
    const navigate = useNavigate();
    const iconStyle = { color: 'white'};
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
                    <button className='buttonTitle' onClick={Home}><AiFillHome size={30} style={iconStyle} /></button>
                    <button className="buttonTitle" onClick={Delivery}> <MdOutlineDeliveryDining size={30} style={iconStyle} /> </button>
                    <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} style={iconStyle} /> </button>
                    <button className="buttonTitle" onClick={User}> <FaRegUser size={30} style={iconStyle} /> </button>
                </div>
            </div>
            <div className="conteudoPedido">
                <Pedido></Pedido>
            </div>
        </div>
    );
}