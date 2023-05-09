import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Login.css"

import logo from "../../assets/logo.png"




export default function Login() {

  const navigate = useNavigate();
  const containerRef = useRef(null);
  function mudarDePagina() {
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
          <h1 className="info">Sign in with your <br /> admin account</h1><br />
          <input type="text" className="input-login" placeholder="User" name="" id="" /><br />
          <input type="text" className="input-login" placeholder="Password" name="" id="" /><br />
          <a><button className="button-login" onClick={mudarDePagina}>Login</button></a>
        </div>
      </div>
    </div>
  )
}