import { useNavigate } from "react-router-dom";
// import { MdOutlineDeliveryDining } from 'react-icons/md';
import Header from '../../components/CompHeader/CompHeader';
import "./TelaUser.css";

export default function TelaUser() {
  const navigate = useNavigate();
  const iconStyle = { color: 'white' };

  function login() {
    navigate("/login")
  }
    function handleHomeClick() {
      navigate('/');
    }
  
    function handleDeliveryClick() {
      navigate('/delivery');
    }
  
    function handleUserClick() {
      navigate('/user');
    }
  function LogOut() {
    // Implemente a lógica de logOut aqui
  }

  return (
    <div>
        <Header
          onHomeClick={handleHomeClick}
          onDeliveryClick={handleDeliveryClick}
          showCartButton={false}
          onUserClick={handleUserClick}
        />
      <div id="root" className="container">

        <div className="descrição">
          <h1>Administrador Balcão</h1>
        </div>
        <div className="container">
          <div className="conteudo">
            <div className="containerBalcao">
              <button className="buttonContainers">Usuário</button>
              <h1>Responsável pelo Balcão:</h1>
              <h3>Alan Santana Leão</h3>
              <h3>alan2006</h3>
            </div>
          </div>
          <div className="logOut">
            <button className="buttonContainers" onClick={login}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
