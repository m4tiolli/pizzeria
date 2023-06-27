import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Login.css"

import logo from "../../assets/logo.png"




export default function Login() {

  const navigate = useNavigate();
  const containerRef = useRef(null);
  function MudarParaPaginaServices() {
    navigate("/Services");
  }

  return (

    <div>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria Admin</h1>
      </div>
      <div className="container">
        <div className="block">
          <h1 className="info">Entre com sua conta
          <br /> de administrador</h1><br />
          <input type="email" className="input-login" placeholder="E-mail" name="" id="" /><br />
          <input type="password" className="input-login" placeholder="Senha" name="" id="" /><br />
          <a><button className="button-login" onClick={MudarParaPaginaServices}>Login</button></a>
        </div>
      </div>
    </div>
  )
}