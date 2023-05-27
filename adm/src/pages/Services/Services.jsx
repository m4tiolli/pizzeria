import "./Services.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Services() {
  const navigate = useNavigate();

  function MudarParaPaginaCadastroBalcao() {
    navigate("/CadastroBalcao");
  }
  function MudarParaPaginaCadastroProduto() {
    navigate("/CadastroProduto");
  }
  function MudarParaPaginaVerEconomia() {
    navigate("/VerEconomia");
  }
  function MudarParaPaginaVerEstoque() {
    navigate("/VerEstoque");
  }
  function MudarParaPaginaVerProdutos() {
    navigate("/VerProdutos");
  }
  function MudarParaPaginaVerBalcoes() {
    navigate("/VerBalcoes");
  }
  function MudarParaPaginaVerMesas() {
    navigate("/VerMesas");
  }


  return (

    <div className="teste">
      <Header></Header>
      <Sidebar></Sidebar>
<section id="content">
      <div className="buttoncontainer">
        <h1 className="services-title">Services</h1>
        <div className="button-row">
          <button className="button red-button" onClick={MudarParaPaginaCadastroBalcao}>
            Cadastrar Balcão
          </button>
          <button className="button red-button" onClick={MudarParaPaginaCadastroProduto}>
            Cadastrar Produto
          </button>
          <button className="button red-button" onClick={MudarParaPaginaVerMesas}>
            Cadastrar Mesas
          </button>
        </div>
        <div className="button-row">
          <button className="button yellow-button" onClick={MudarParaPaginaVerBalcoes}>
            Ver Balcões
          </button>
          <button className="button yellow-button" onClick={MudarParaPaginaVerProdutos}>
            Ver Produtos
          </button>
          <button className="button yellow-button" onClick={MudarParaPaginaVerEstoque}>
            Estoque
          </button>
        </div>
        <div className="button-row">
          <button className="button green-button" onClick={MudarParaPaginaCadastroBalcao}>
            Relatório de Vendas
          </button>
          <button className="button green-button" onClick={MudarParaPaginaCadastroBalcao}>
            Receber Produto
          </button>
          <button className="button green-button" onClick={MudarParaPaginaVerEconomia}>
            Economia
          </button>
        </div>
      </div>
      </section>
    </div>
  );
}