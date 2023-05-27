import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Produtos() {
  const navigate = useNavigate();
  function MudarParaPaginaVerProdutos() {
    navigate("/VerProdutos");
    
  }

  return (
    <div className="services-container">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria</h1>
      </div>
      <div className="buttoncontainer">
        <h1 className="services-title">Produtos</h1>
        <div className="button-row">
          <button className="button red-button" onClick={MudarParaPaginaVerProdutos}>
            Ver Produtos
          </button>
        </div>
      </div>
    </div>
  );
}