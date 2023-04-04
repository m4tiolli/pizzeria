import "./User_TelaEstoque.css";
import logo from "../../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function Tela_Estoque()
{
    
    const navigate = useNavigate();
    function navegar(rota){
        navigate(rota)
    }

    return(
        <div>
            <div className="header">
              <img src={logo} alt="" className="logo" />
              <h1 className="title">Pizzeria Balcão</h1>  
              <button onClick={() => navegar("../login")} className="buttonTitle"> Delivery </button>
              <button className="buttonTitle"> Pedidos Para Retirar </button>
              <button className="buttonTitle"> Mesas Disponíveis </button> 
              <button className="buttonTitle"> Chat </button> 
              <button className="ButtonTitle" align="right"> User </button>
            </div>   
        </div>
    )
}