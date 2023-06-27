import { useNavigate } from "react-router-dom";
// import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiReceipt } from "react-icons/bi"

import logo from '../../assets/logo.png';
import "./TelaUser.css";

export default function TelaUser() {
  const navigate = useNavigate();
  const iconStyle = { color: 'white' };

  function login() {
    navigate("/login")
  }
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
  function LogOut() {
    // Implemente a lógica de logOut aqui
  }

  return (
    <div>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria Balcão</h1>
        <button className='buttonTitle' onClick={Home}><AiFillHome size={30} style={iconStyle} /></button>
        <button className="buttonTitle" onClick={Delivery}> <BiReceipt size={30} style={iconStyle} /> </button>
        <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} style={iconStyle} /> </button>
        <button className="buttonTitle" onClick={User}> <FaRegUser size={30} style={iconStyle} /> </button>
      </div>
      <div id="root" className="container">

        <div className="descrição">
          <h1>Administrador Balcão</h1>
        </div>
        <div className="container">
          <div className="conteudo">
            <div className="containerFaturamento">
              <button className="buttonContainers">Caixa</button>
              <h1>Faturamento do dia:</h1>
              <h3>20.03.2006</h3>
              <h3>Semana 5</h3>
              <h3>R$ 102.00</h3>
            </div>
            <div className="containerBalcao">
              <button className="buttonContainers">Usuário</button>
              <h1>Responsável pelo Balcão:</h1>
              <h3>Julia Linda</h3>
              <h3>user2006</h3>
            </div>
          </div>
          <div className="logOut">
            <button className="buttonContainers" onClick={LogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
