import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Produto from '../../components/Pizzas/CompProdutos-module';
import Sidebar from '../../components/Sidebar/Sidebar';
import './User_TelaPrincipal.css';
import Header from '../../components/CompHeader/CompHeader';

export default function TelaPrincipal() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [className, setClassName] = useState('');

  useEffect(() => {
    moverItens();
  }, [sidebarOpen]);

  useEffect(() => {
    fetch('https://pizzeria3.azurewebsites.net/api/produto', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        setProdutos(json);
      })
      .catch((error) => {
        console.log(error);
        alert('Erro ao buscar Produto');
      });
  }, []);

  function handleHomeClick() {
    navigate('/');
  }

  function handleDeliveryClick() {
    navigate('/delivery');
  }

  function handleRetirarClick() {
    navigate('/retirar');
  }

  function handleUserClick() {
    navigate('/user');
  }

  function atualizarCarrinho() {
    const storage = JSON.parse(localStorage.getItem('carrinho'));

    if (!storage || storage === []) {
      alert('Carrinho vazio');
    }

    setCarrinho(storage);
  }

  function handleCartClick() {
    const storage = JSON.parse(localStorage.getItem('carrinho'));

    if (!storage || storage === []) {
      alert('Carrinho vazio');
    } else {
      setSidebarOpen(!sidebarOpen);
    }

    setCarrinho(storage);
  }

  function moverItens() {
    if (sidebarOpen) {
      setClassName('centered-container');
    } else {
      setClassName('');
    }
  }

  return (
    <div>
      <div id="root">
      <Header
        onHomeClick={handleHomeClick}
        onDeliveryClick={handleDeliveryClick}
        showCartButton={true}  // Mostra o botão do carrinho
        onCartClick={handleCartClick}
        onUserClick={handleUserClick}
      />

        <div className="containerGeral">
          {sidebarOpen && (
            <Sidebar carrinho={carrinho} setSidebarOpen={setSidebarOpen} atualizarCarrinho={atualizarCarrinho}>
              Sidebar
            </Sidebar>
          )}
          <div className="containerItens">
            <div className={`buttonFiltroContainer`}>
              <button className="buttonPizzas">Pizzas</button>
              <button className="buttonFiltro">Bebidas</button>
              <button className="buttonFiltro">Aperitivos</button>
              <button className="buttonPromocoes">Promoções</button>
            </div>
            <div className={`Produtos-Container ${className}`}>
              {produtos.map((pizza, index) => (
                <Produto pizza={pizza} key={index} abrirSidebar={setSidebarOpen} atualizarCarrinho={atualizarCarrinho} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
