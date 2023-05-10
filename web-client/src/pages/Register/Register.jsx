import "./Register.css";
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Register() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = (e) => {
    e.preventDefault();

    const body = { nome, cpf, email, senha };
    fetch("https://pizzeriatcc.azurewebsites.net/api/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then((response) => { alert("Usúario cadastrado com sucesso"); })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar usúario")
      });
    }
    return (
      <div>
        <Header />
        <div onSubmit={e => { cadastrarUsuario(e) }} className="conteudoregister">
          <div className="blocoregister">
            <div className="fundoRegister">
              <h1 className="titleregister">register</h1>
              <div className="inputpai">
                <label className="labelinput" htmlFor="name">name</label>
                <div className="inputdiv">
                  <input
                    className="inputtext"
                    type="text"
                    name=""
                    id="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
               
                  />
                </div>
              </div>
              <br />
              <div className="inputpai">
                <label className="labelinput" htmlFor="Email">e-mail</label>
                <div className="inputdiv">
                  <input
                    className="inputtext"
                    type="text"
                    name=""
                    value={email}
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                   
                  />
                </div>
              </div>
              <br />
              <div className="inputpai">
                <label className="labelinput" htmlFor="Password">password</label>
                <div className="inputdiv">
                  <input
                    className="inputtext"
                    type="password"
                    name=""
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    id="Password"
                  
                  />
                </div>
              </div>
              <div className="inputpai">
                <label className="labelinput" htmlFor="CPF">CPF</label>
                <div className="inputdiv">
                  <input
                    className="inputtext"
                    type="text"
                    name=""
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    id="CPF"
                   
                  />
                </div>
              </div>
              <button className="buttonregister" onClick={cadastrarUsuario}>register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Register;