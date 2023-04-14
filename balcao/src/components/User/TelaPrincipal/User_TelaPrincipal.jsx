import "./User_TelaPrincipal.css";
import logo from "../../../assets/logo.png";
import pizzas from'./Pizzas.js';
import "./Pizzas.js";
import "./Script.js"
//  import menu_hamburger from "../../../assets/menu_hamburger.png"

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
            <button className="ButtonTitle" align="right"> User </button>
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
               <div class="menu-openner"><span>0</span>🛒</div>

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

            <div class="cart--item">
               <img src="" />
               <div class="cart--item-nome">--</div>
                  <div class="cart--item--qtarea">
                  <button class="cart--item-qtmenos">-</button>
                  <div class="cart--item--qt">1</div>
                <button class="cart--item-qtmais">+</button>
               </div>
            </div>

         </div>

         {/*  aside do carrinho  */}
    <aside>
        <div class="cart--area">
            <div class="menu-closer">❌</div>
            <h1>Suas Pizzas</h1>
            <div class="cart"></div>
            <div class="cart--details">
                <div class="cart--totalitem subtotal">
                    <span>Subtotal</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--totalitem desconto">
                    <span>Desconto</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--totalitem total big">
                    <span>Total</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--finalizar">Finalizar a compra</div>
            </div>
        </div>
    </aside>

    {/* janela modal .pizzaWindowArea */}
    <div class="pizzaWindowArea">
        <div class="pizzaWindowBody">
            <div class="pizzaInfo--cancelMobileButton">Voltar</div>
            <div class="pizzaBig">
                <img src="" />
            </div>
            <div class="pizzaInfo">
                <h1>--</h1>
                <div class="pizzaInfo--desc">--</div>
                <div class="pizzaInfo--sizearea">
                    <div class="pizzaInfo--sector">Tamanho</div>
                    <div class="pizzaInfo--sizes">
                        <div data-key="P" class="pizzaInfo--size">PEQUENA <span>--</span></div>
                        <div data-key="M" class="pizzaInfo--size">MÉDIA <span>--</span></div>
                        <div data-key="G" class="pizzaInfo--size selected">GRANDE <span>--</span></div>
                    </div>
                </div>
                <div class="pizzaInfo--pricearea">
                    <div class="pizzaInfo--sector">Preço</div>
                    <div class="pizzaInfo--price">
                        <div class="pizzaInfo--actualPrice">R$ --</div>
                        <div class="pizzaInfo--qtarea">
                            <button class="pizzaInfo--qtmenos">-</button>
                            <div class="pizzaInfo--qt">1</div>
                            <button class="pizzaInfo--qtmais">+</button>
                        </div>
                    </div>
                </div>
                <div class="pizzaInfo--addButton">Adicionar ao carrinho</div>
                <div class="pizzaInfo--cancelButton">Cancelar</div>
            </div>
        </div>
    </div>

      </div>


   )
}