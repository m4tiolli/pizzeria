import Header from "../../components/Header/Header";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./CadastroEnde.css";

function CadastroEnde() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const [bairro, setBairro] = useState("");
  const [ruaAvenida, setRuaAvenida] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [casaTrabalho, setCasaTrabalho] = useState("");

  const cadastrarEndereco = (e) => {
    e.preventDefault();

    if (bairro == "" || ruaAvenida == "" || numero == "" || cep == "" || estado == "" || cidade == "" || casaTrabalho == ""){
      alert("Por favor, preencha todos os campos.")
      return;
    }
    else {

      const body = { bairro, ruaAvenida, numero, cep, estado, cidade, casaTrabalho };
      fetch("https://pizzeria3.azurewebsites.net/api/enderecos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then((response) => { alert("Endereço cadastrado com sucesso"); })
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao cadastrar endereço")
        });

        const navigate = useNavigate();
          navigate("/SelectEnde")
    }
  }


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
          <div className="fundoCadastroEnde">
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
              <br />
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
              <br />
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
              <br />
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
              <br />
            </div>
            <br />
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
            <br />
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
            <div>
              <input type='radio' name='option' value='Casa' className='casa' checked={selectedOption === "Casa"} onChange={(e) => { handleOptionChange(e); setCasaTrabalho(e.target.value) }} />Casa
              <input type='radio' name='option' value='Trabalho' className='trabalho' checked={selectedOption === "Trabalho"} onChange={(e) => { handleOptionChange(e); setCasaTrabalho(e.target.value) }} />Trabalho
            </div>
            <button className="esqueci" alt='' onClick={(e) => { cadastrarEndereco(e) }}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroEnde;