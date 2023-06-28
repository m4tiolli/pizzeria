import Header from "../../components/Header/Header";
import "./EditarCartao.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DadosUsuario } from "../../components/AuthContext";


function EditarCartao(){

    const [numero, setNumero] = useState("");
    const [nome, setNome] = useState("");
    const [cvc, setCVC] = useState("");
    const [datavalidade, setDataValidade] = useState("");
    const [tipo, setTipo] = useState("");

    const cadastrarCartao = (e) => {
        e.preventDefault();

    return(
        <div>
            <Header></Header>
            <div className="conteudoCadastroEnde">
            <div className="blocoLoginCadastroEnde">
                <h1 className="title" >Dados do Cartão</h1>
            <div className="inputpai">
                <label className="labelinput" htmlFor="NomeTitular">nome do titular</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="string"
                name=""
                id="NomeTitular"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>

          <div className="inputpai">
                <label className="labelinput" htmlFor="NumeroCartao">número do cartão</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="number"
                name=""
                id="NumeroCartao"
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
          </div>

          <div className="inputpai">
                <label className="labelinput" htmlFor="DataValidade">Data de Validade</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="date"
                name=""
                id="DataValidade"
                onChange={(e) => setDataValidade(e.target.value)}
              />
            </div>
          </div>

          <div className="inputpai">
                <label className="labelinput" htmlFor="CVC">CVC</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="number"
                name=""
                id="CVC"
                onChange={(e) => setCVC(e.target.value)}
              />
            </div>
          </div>

          <div className="inputpai">
                <label className="labelinput" htmlFor="Tipo">tipo</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="string"
                name=""
                id="Tipo"
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
          </div>
          <button className="buttonlogin" alt=''onClick={(e) => { cadastrarCartao(e) }}>finalizar</button>
        </div>
        </div>
        </div>
    );
};
}

export default EditarCartao;