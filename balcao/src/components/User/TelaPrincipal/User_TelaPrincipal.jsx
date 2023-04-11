 import "./User_TelaPrincipal.css";
 import logo from "../../../assets/logo.png"
//  import menu_hamburger from "../../../assets/menu_hamburger.png"

 export default function Tela_principal()
{   
     return (
   <div>

         <div className="header">
            <button className=""></button>
         <img src={logo} alt="" className="logo" />
              <h1 className="title">Pizzeria Balcão</h1>
              <button className="buttonTitle"> Delivery </button>   
              <button className="buttonTitle"> Pedidos Para Retirar </button>  
              <button className="buttonTitle"> Mesas Disponíveis </button> 
              <button className="buttonTitle"> Estoque </button> 
              <button className="buttonTitle"> Chat </button> 
              <button className="ButtonTitle" align="right"> User </button>
        </div>

        <div className="container">
        <input type="text" className="input" placeholder="Pesquisar item" name="" id="" /><br/>
        <button className="button">Pizzas</button> <button className="button">Bebidas</button> <button className="button">Apeditivos</button> <button className="button">Promoções</button>
        </div>
    </div>
    
 )
 }