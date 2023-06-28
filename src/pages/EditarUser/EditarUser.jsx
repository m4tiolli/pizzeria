
import Header from "../../components/Header/Header";
import "./EditarUser.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DadosUsuario } from "../../components/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function EditarUser() { 

const navigate = useNavigate();

const [nome, setNome] = useState("");
const [cpf, setCPF] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [confirmarSenha, setConfirmarSenha] = useState("");
const [mostrarSenha, setMostrarSenha] = useState(false);
const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

const [usuario, setUsuario] = useState(null);

const [usuarioPorID, setUsuarioID] = useState("");

async function BuscarDados(jwt) {
  if (jwt?.ID) {
    const response = await fetch(`https://pizzeria3.azurewebsites.net/api/usuario/${jwt.ID}`, {
      method: "GET",
    });
    if (response.ok) {
      const json = await response.json();
      setUsuarioID(json);
      setSenha("");
    } else {
      throw new Error("Erro ao buscar usuário por ID");
    }
  } else {
    throw new Error("ID do usuário não definido");
  }
}

async function Dados() {
  const jwt = await DadosUsuario();
  setUsuario(jwt);
  BuscarDados(jwt);
}

useEffect(() => {
  console.log("Entrei aqui")
  Dados();
}, []);

useEffect(() => {
  if (usuarioPorID) {
    setNome(usuarioPorID.nome);
    setCPF(usuarioPorID.cpf);
    setEmail(usuarioPorID.email);
  }
}, [usuarioPorID]);


function AlterarDados() {
  if (senha === usuarioPorID?.senha) {
    const body = { nome, cpf, email, id: usuarioPorID.id};
    fetch(`https://pizzeria3.azurewebsites.net/api/usuario`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        alert("Dados alterados com sucesso")
      })
      .then(() => navigate("Settings"))
      .catch((err) => {
        console.log(err);
        alert("Erro ao editar informações")
      });
  } else {
    alert("Senha incorreta");
  }
}

const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const toggleMostrarConfirmarSenha = () => {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha);
  };

    return(
        <div>
      <Header />
      <div className="conteudoregister">
        <div className="blocoregister">
          <h1 className=" titleregister">Editar Dados</h1>
          <div id="inputs">
            <div className="inputpai">
              <label className="labelinput" htmlFor="name">
                name
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type="text"
                  name="name"
                  id="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  maxLength={50}
                  required

                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="CPF">
                CPF
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type="number"
                  name="cpf"
                  value={cpf}
                  onChange={(e) => setCPF(e.target.value)}
                  id="CPF"
                  maxLength={11}
                  required
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Email">
                e-mail
              </label>
              <div name="inputdiv" className="inputdiv">
                <input
                  className="inputtext1"
                  type="text"
                  name="email"
                  value={email}
                  id="Email"
                  maxLength={50}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Password">
                password
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  id="Password"
                  maxLength={30}
                  required
                />
                {mostrarSenha ? (
                  <AiOutlineEyeInvisible
                    className="eye"
                    size={25}
                    onClick={toggleMostrarSenha}
                  />
                ) : (
                  <AiOutlineEye
                    className="eye"
                    size={25}
                    onClick={toggleMostrarSenha}
                  />
                )}
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="ConfirmPassword">
                confirm password
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type={mostrarConfirmarSenha ? "text" : "password"}
                  name="confirmpassword"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  id="ConfirmPassword"
                  maxLength={30}
                  required
                />
                {mostrarConfirmarSenha ? (
                  <AiOutlineEyeInvisible
                    className="eye"
                    size={25}
                    onClick={toggleMostrarConfirmarSenha}
                  />
                ) : (
                  <AiOutlineEye
                    className="eye"
                    size={25}
                    onClick={toggleMostrarConfirmarSenha}
                  />
                )}
              </div>
            </div>
          </div>
          <button className="buttonregister" onClick={AlterarDados}>
            Alterar
          </button>
        </div>
      </div>
    </div>

    )
}

export default EditarUser;