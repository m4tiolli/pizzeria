
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Economia() {
  const navigate = useNavigate();

  function MudarParaPaginaVerEconomia() {
    navigate("/VerEconomia");
  }
  
  return (
    <div className="services-container">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria</h1>
      </div>
      <div className="buttoncontainer">
        <h1 className="services-title">Economia</h1>
        <div className="button-row">
          <button className="button red-button" onClick={MudarParaPaginaVerEconomia}>
            Ver Economia
          </button>
        </div>
      </div>
    </div>
  );
}