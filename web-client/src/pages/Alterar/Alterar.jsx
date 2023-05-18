import "./Alterar.css";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";

function Alterar (){
    const navigate = useNavigate();

    function navCarrinho(){
        navigate("/Carrinho")
    }
return(
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <button className="btnAdicionar1" onClick={navCarrinho}>Adicionar</button>
        </div>
    </div>
);
}

export default Alterar;