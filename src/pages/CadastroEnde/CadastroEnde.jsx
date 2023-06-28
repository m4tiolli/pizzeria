import Header from "../../components/Header/Header";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./CadastroEnde.css";

function CadastroEnde() {



  const navigate = useNavigate();

  const [bairro, setBairro] = useState("");
  const [ruaAvenida, setRuaAvenida] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const cadastrarEndereco = (e) => {
    e.preventDefault();

    if (bairro === '' || ruaAvenida === '' || numero === '' || cep === '' || estado === '' || cidade === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    } else {
      const body = { bairro, ruaAvenida, numero, cep, estado, cidade };
      fetch('https://pizzeria3.azurewebsites.net/api/enderecos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then((response) => {
          alert('Endereço cadastrado com sucesso');
          navigate('/SelectEnde', { state: { enderecoCadastrado: body } });
        })
        .catch((error) => {
          console.log(error);
          alert('Erro ao cadastrar endereço');
        });
    }
  };


  async function buscarEndereco() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setRuaAvenida(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <Header />
      <div className="conteudoCadastroEnde">
        <div className="blocoLoginCadastroEnde">
          <h1 className="title">Cadastrar Endereço</h1>
          <div className="inputpai">
            <label className="labelinput" htmlFor="CEP" >CEP</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="text"
                name=""
                id="CEP"
                value={cep}
                onChange={(e) => setCEP(e.target.value)}
                onBlur={buscarEndereco}

              />
            </div>
          </div>
          <div className="inputpai">
            <label className="labelinput" htmlFor="Bairro">Bairro</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="text"
                name=""
                id="Bairro"
                value={bairro}
                readOnly
                onChange={(e) => setBairro(e.target.value)}

              />
            </div>
          </div>
          <div className="inputpai">
            <label className="labelinput" htmlFor="Rua/Avenida">Rua/Avenida</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="text"
                name=""
                id="Rua/Avenida"
                value={ruaAvenida}
                readOnly
                onChange={(e) => setRuaAvenida(e.target.value)}

              />
            </div>
          </div>
          <div className="inputpai">
            <label className="labelinput" htmlFor="Número">Número</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="number"
                name=""
                id="Número"
                onChange={(e) => setNumero(e.target.value)}

              />
            </div>
          </div>
          <div className="inputpai">
            <label className="labelinput" htmlFor="Estado">Estado</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="text"
                name=""
                id="Estado"
                value={estado}
                readOnly
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
          </div>
          <div className="inputpai">
            <label className="labelinput" htmlFor="Cidade">Cidade</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="text"
                name=""
                id="Cidade"
                value={cidade}
                readOnly
                onChange={(e) => setCidade(e.target.value)}

              />
            </div>
          </div>
          <button className="buttonlogin" alt='' onClick={(e) => { cadastrarEndereco(e) }}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default CadastroEnde;