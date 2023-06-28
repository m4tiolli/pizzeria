import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from "../../components/Footer/Footer";
import "./Services.css";

export default function Services() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Atraso de 500 milissegundos (ou o valor que você preferir)

    return () => clearTimeout(timer);
  }, []);

  function MudarParaPaginaCadastroBalcao() {
    navigate("/CadastroBalcao");
  }

  function MudarParaPaginaCadastroProduto() {
    navigate("/CadastroProduto");
  }

  function MudarParaPaginaVerEconomia() {
    navigate("/VerEconomia");
  }

  function MudarParaPaginaVerEstoque() {
    navigate("/VerEstoque");
  }

  function MudarParaPaginaVerProdutos() {
    navigate("/VerProdutos");
  }

  function MudarParaPaginaVerBalcoes() {
    navigate("/VerBalcoes");
  }

  function MudarParaPaginaVerMesas() {
    navigate("/VerMesas");
  }

  return (
    <div className="Services">
      <Header></Header>
      <Sidebar></Sidebar>
      <section id="content">
        <div className={`animation-container ${isAnimated ? "fade-in" : ""}`}>
          <div className="buttoncontainer">
            <h1 className="services-title">Serviços</h1>
            <div className="button-row">
              <button className="button red-button" onClick={MudarParaPaginaCadastroBalcao}>
                Cadastrar Balcão
              </button>
              <button className="button red-button" onClick={MudarParaPaginaCadastroProduto}>
                Cadastrar Produto
              </button>
              <button className="button red-button" onClick={MudarParaPaginaVerMesas}>
                Cadastrar Mesas
              </button>
            </div>
            <div className="button-row">
              <button className="button yellow-button" onClick={MudarParaPaginaVerBalcoes}>
                Ver Balcões
              </button>
              <button className="button yellow-button" onClick={MudarParaPaginaVerProdutos}>
                Ver Produtos
              </button>
            </div>
            <div className="button-row">
              <button className="button green-button" onClick={MudarParaPaginaVerEconomia}>
                Economia
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </section>
    
    </div>
  );
}
