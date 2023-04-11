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

        <main  align="center">

               <div className="input_pesquisar"><input className="input" type="text"placeholder="Pesquisar item"/></div>
         <div className="pizza-area"></div>
        </main>

         <div className="models">

            <div className="buttons" style={{ display: "flex", justifyContent: "flex-end" }}>
               <button className="button">Pizzas</button> 
               <button className="button">Bebidas</button> 
               <button className="button">Aperitivos</button> 
               <button className="button">Promoções</button>

            </div>

            <div className="pizza-item">
               <a href="">
                  <div className="pizza-item--img"><img src=""/></div>
                  <div className="pizza-item--add">+</div>
               </a>
               <div className="pizza-item--price">R$ --</div>
               <div className="pizza-item--name">--</div>
               <div className="pizza-item--desc">--</div>
             </div>


         </div>
    </div>
    
 )
 }