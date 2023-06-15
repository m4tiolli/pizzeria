import "./Alterar.css";
import Produto1 from '../../components/Item1/CompProdutos1.jsx'
import Header from "../../components/Header/Header";

function Alterar() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="Produtos-Container">
            <Produto1 />
            </div>
        </div>
    );
}

export default Alterar;