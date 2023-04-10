
import btnpesquisa from "../../assets/searchnormal1.png";
import delivery from "../../assets/delivery.png";
import cardapio from "../../assets/cardapio.png";
import "./Home.css";
import HeaderInicial from "../../components/HeaderInicial/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

    function navcardapio() {
        navigate("/Pizzas")
    }
  return (
    <div className="screen">
      <HeaderInicial />
      <h1 className="title1">
        welcome to our pizzeria. choose a pizza and be happy!
      </h1>
      <div className="search">
        <div className="blockpesquisa">
          <img src={btnpesquisa} className="imgpesquisa" alt="" />
          <input
            className="inputpesquisa"
            type="text"
            placeholder="search for some pizza..."
          />
        </div>
        <button className="btnSearch">search</button>
      </div>
      <div className="options">
        <div className="cardapio">
          <div onClick={navcardapio}>
            <img src={cardapio} className="icon" alt="" />
            <button className="button btncardapio">cardapio</button>
          </div>
        </div>
        <div className="delivery">
          <div>
            <img src={delivery} className="icon" alt="" />
            <button className="button btndelivery">delivery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
