import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { MdMenu } from 'react-icons/md';
import { MdShoppingCart, MdTableBar, MdOutlineDeliveryDining } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import Produto from '../../components/Pizzas/CompProdutos-module';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./User_TelaPrincipal.css";
import logo from '../../assets/logo.png';

export default function TelaPrincipal() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [className, setClassName] = useState("");

  useEffect(() => {
    moverItens();
  }, [sidebarOpen]);  

  useEffect(() => {
    fetch("https://pizzeria3.azurewebsites.net/api/produto", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setProdutos(json);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar Produto");
      })
  }, []);

  function atualizarCarrinho() {
    const storage = JSON.parse(localStorage.getItem("carrinho"));

    if (!storage || storage === []) {
      alert("Carrinho vazio");
    }

    setCarrinho(storage);
  }

  function abrirCarrinho() {
    const storage = JSON.parse(localStorage.getItem("carrinho"));
  
    if (!storage || storage === []) {
      alert("Carrinho vazio");
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  
    setCarrinho(storage);
  }
  

  function moverItens() {
    if (sidebarOpen) {
      setClassName("centered-container");
    } else {
      setClassName("");
    }
  }
  
  return (
    <div>
      <div id="root">
        <div className="header">
          <button className="buttonMenuHamburger"><MdMenu size={30} /></button>
          <img src={logo} alt="" className="logo" />
          <h1 className="title">Pizzeria Balcão</h1>
          <button className="buttonTitle"> <MdOutlineDeliveryDining size={30} /> </button>
          <button className="buttonTitle"> <BsFillBagCheckFill size={30} /> </button>
          <button className="buttonTitle"> <MdTableBar size={30} /> </button>
          <button className='buttonTitle' onClick={abrirCarrinho}><MdShoppingCart size={30} /></button>
          <button className="buttonTitle"> <FaRegUser size={30} /> </button>
        </div>

        <main align="center">
          <input className="input" type="text" placeholder="Pesquisar item" />
          <div className="pizza-area"></div>
        </main>

        <div style={{ textAlign: 'center' }}>
          <button className='buttonFiltro'>Pizzas</button>
          <button className='buttonFiltro'>Bebidas</button>
          <button className='buttonFiltro'>Aperitivos</button>
          <button className='buttonFiltro'>Promoções</button>
        </div>

        {sidebarOpen && <Sidebar carrinho={carrinho} setSidebarOpen={setSidebarOpen} atualizarCarrinho={atualizarCarrinho}>Sidebar</Sidebar>}

        <div className={`Produtos-Container ${className}`}>
          {produtos.map((pizza, index) => (
            <Produto pizza={pizza} key={index} abrirSidebar={setSidebarOpen} atualizarCarrinho={atualizarCarrinho} />
          ))}
        </div>
      </div>
    </div>
  );
}
