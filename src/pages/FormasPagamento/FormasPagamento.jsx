import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';
import pix from "../../assets/pix.png";
import cartao from "../../assets/cc.png";
import "./FormasPagamento.css";

function FormasPagamento() {

    const navigate = useNavigate();

    function navPix() {
        navigate("/Pix")
    }
    function navCartao() {
      navigate("/Cartao")
    }

return(
    <div className="containerSelectMethod">
        <Header/>
        <div className="fundoSelecMethod" >
            <h1 className="titleSelecMethod">selecionar forma de pagamento:</h1>
            <div className="divPix" onClick={navPix}>
                <img className="imgPix" src={pix} alt="pix"></img>
                <button className="btnPix">pix</button>
            </div>
            <div className="divCartao" onClick={navCartao}>
                <img className="imgCartao" src={cartao} alt="cartao"></img>
                <button className="btnCartao">cartão</button>
            </div>
        </div>
    </div>
);
}

export default FormasPagamento; 