 import "./User_TelaPrincipal.css";
 import logo from "../../../assets/logo.png"

 export default function tela_principal()
{   
     return (
   <div>
         <div className="header">
         <img src={logo} alt="" className="logo" />
              <h1 className="title">Pizzeria Balcão</h1>
        </div>
    </div>
    
 )
 }