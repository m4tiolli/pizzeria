
import btnpesquisa from "../../assets/searchnormal1.png";
import delivery from "../../assets/delivery.png";
import cardapio from "../../assets/cardapio.png";
import "./Home.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

    function navcardapio() {
        navigate("/Produtos")
    }
    function navSelectEnde() {
      navigate("/SelectEnde")
    }
  return (
    <div className="screen">
      <Header />
      <h1 className="title1">
        welcome to our pizzeria. choose a pizza and be happy!
      </h1>
      <div className="options">
        <div className="cardapio">
          <div onClick={navcardapio}>
            <img src={cardapio} className="icon" alt="" />
            <button className="button btncardapio" >cardapio</button>
          </div>
        </div>
        <div className="delivery" onClick={navSelectEnde}>
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
