import "./User_TelaPrincipal.css";
import logo from "../../../assets/logo.png";
// import "pizzas.js";
import "script.jsx"


export default function Tela_principal() {

   
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
            <button className="buttonTitle"> User </button>
         </div>

         <main align="center">

            <div className="input_pesquisar"><input className="input" type="text" placeholder="Pesquisar item" /></div>
            <div className="pizza-area"></div>
         </main>

         <div className="models">

            <div className="buttons" style={{ display: "flex", justifyContent: "flex-end" }}>
               
               <button className="button">Pizzas</button>
               <button className="button">Bebidas</button>
               <button className="button">Aperitivos</button>
               <button className="button">Promoções</button>
               <div className="menu-openner"><span>0</span>🛒</div>

            </div>

            <div className="pizza-item">
               <a href="">
                  <div className="pizza-item--img"><img src="" /></div>
                  <div className="pizza-item--add">+</div>
               </a>
               <div className="pizza-item--price">R$ --</div>
               <div className="pizza-item--name">--</div>
               <div className="pizza-item--desc">--</div>
            </div>

            <div className="cart--item">
               <img src="" />
               <div className="cart--item-nome">--</div>
                  <div className="cart--item--qtarea">
                  <button className="cart--item-qtmenos">-</button>
                  <div className="cart--item--qt">1</div>
                <button className="cart--item-qtmais">+</button>
               </div>
            </div>

            

         </div>

         {/*  aside do carrinho  */}
    <aside>
        <div className="cart--area">
            <div className="menu-closer">❌</div>
            <h1>Suas Pizzas</h1>
            <div className="cart"></div>
            <div className="cart--details">
                <div className="cart--totalitem subtotal">
                    <span>Subtotal</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--totalitem desconto">
                    <span>Desconto</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--totalitem total big">
                    <span>Total</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--finalizar">Finalizar a compra</div>
            </div>
        </div>
    </aside>

    {/* janela modal .pizzaWindowArea */}
    <div className="pizzaWindowArea">
        <div className="pizzaWindowBody">
            <div className="pizzaInfo--cancelMobileButton">Voltar</div>
            <div className="pizzaBig">
                <img src="" />
            </div>
            <div className="pizzaInfo">
                <h1>--</h1>
                <div className="pizzaInfo--desc">--</div>
                <div className="pizzaInfo--sizearea">
                    <div className="pizzaInfo--sector">Tamanho</div>
                    <div className="pizzaInfo--sizes">
                        <div data-key="P" className="pizzaInfo--size">PEQUENA <span>--</span></div>
                        <div data-key="M" className="pizzaInfo--size">MÉDIA <span>--</span></div>
                        <div data-key="G" className="pizzaInfo--size selected">GRANDE <span>--</span></div>
                    </div>
                </div>
                <div className="pizzaInfo--pricearea">
                    <div className="pizzaInfo--sector">Preço</div>
                    <div className="pizzaInfo--price">
                        <div className="pizzaInfo--actualPrice">R$ --</div>
                        <div className="pizzaInfo--qtarea">
                            <button className="pizzaInfo--qtmenos">-</button>
                            <div className="pizzaInfo--qt">1</div>
                            <button className="pizzaInfo--qtmais">+</button>
                        </div>
                    </div>
                </div>
                <div className="pizzaInfo--addButton">Adicionar ao carrinho</div>
                <div className="pizzaInfo--cancelButton">Cancelar</div>
            </div>
        </div>
    </div>

      </div>


   )
}