
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Estoque() {
  const navigate = useNavigate();

  function MudarParaPaginaVerEstoque() {
    navigate("/VerEstoque");
  }
  


  return (
    <div className="services-container">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria</h1>
      </div>
      <div className="buttoncontainer">
        <h1 className="services-title">Estoque</h1>
        <div className="button-row">
          <button className="button red-button" onClick={MudarParaPaginaVerEstoque}>
            Ver Estoque
          </button>
        </div>
      </div>
     
    </div>
  );
}