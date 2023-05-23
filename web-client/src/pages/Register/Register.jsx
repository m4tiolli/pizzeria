import "./Register.css";
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function validateForm() {
  var validar = document.forms["inputdiv"]["name", "email", "password", "cpf"].value;
  if (validar == "") {
    alert("Por favor, preencha todos os campos");
    return false;
  }
}

function Register() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = (e) => {
    e.preventDefault();

    if (nome == "" || cpf == "" || email == "" || senha == ""){
      alert("Por favor, preencha todos os campos.")
      return;
    }
    else {

      const body = { nome, cpf, email, senha };
      fetch("https://pizzeria3.azurewebsites.net/api/usuario", {
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
                  name="name"
                  id="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required />
              </div>
            </div>
            <br />
            <div className="inputpai">
              <label className="labelinput" htmlFor="Email">e-mail</label>
              <div name={"inputdiv"} className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name="email"
                  value={email}
                  id="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
            </div>
            <br />
            <div className="inputpai">
              <label className="labelinput" htmlFor="Password">password</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="password"
                  name="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  id="Password"
                  required />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="CPF">CPF</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name="cpf"
                  value={cpf}
                  onChange={(e) => setCPF(e.target.value)}
                  id="CPF"
                  required />
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