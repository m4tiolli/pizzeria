import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdOutlineTableRestaurant, MdOutlineDeliveryDining } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai'
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
  const iconStyle = { color: 'white' };

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
          <img src={logo} alt="" className="logo" />
          <h1 className="title">Pizzeria Balcão</h1>
          <button className='buttonTitle' onClick={Home}><AiFillHome size={30} style={iconStyle}/></button>
          <button className="buttonTitle" onClick={Delivery}> <MdOutlineDeliveryDining size={30} style={iconStyle} /> </button>
          <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} style={iconStyle} /> </button>
          <button className="buttonTitle" onClick={Mesas}> <MdOutlineTableRestaurant size={30} style={iconStyle} /> </button>
          <button className='buttonTitle' onClick={abrirCarrinho}><MdShoppingCart size={30} style={iconStyle} /></button>
          <button className="buttonTitle" onClick={User}> <FaRegUser size={30} style={iconStyle} /> </button>
        </div>

        {sidebarOpen && <Sidebar carrinho={carrinho} setSidebarOpen={setSidebarOpen} atualizarCarrinho={atualizarCarrinho}>Sidebar</Sidebar>}

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


        <div className={`Produtos-Container ${className}`}>
          {produtos.map((pizza, index) => (
            <Produto pizza={pizza} key={index} abrirSidebar={setSidebarOpen} atualizarCarrinho={atualizarCarrinho} />
          ))}
        </div>
      </div>
    </div>
  );
}
