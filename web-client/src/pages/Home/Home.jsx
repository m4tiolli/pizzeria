import "./Home.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";

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
            <BiFoodMenu className="iconCarda"/>
            <button className="button btncardapio" >cardapio</button>
          </div>
        </div>
        <div className="delivery" onClick={navSelectEnde}>
          <div>
            <MdOutlineDeliveryDining className="iconDeli"/>
            <button className="button btndelivery">delivery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
