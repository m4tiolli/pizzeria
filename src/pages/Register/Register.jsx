import "./Register.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const cadastrarUsuario = (usuario) => {
    usuario.preventDefault();

    if (
      nome === "" ||
      cpf === "" ||
      email === "" ||
      senha === "" ||
      confirmarSenha === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const body = { tipo: "usuario", nome, cpf, email, senha };
    fetch("https://pizzeria3.azurewebsites.net/api/auth/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        alert("Usuário cadastrado com sucesso.");
      })
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar usuário.");
      });
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const toggleMostrarConfirmarSenha = () => {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha);
  };

  return (
    <div>
      <Header />
      <div onSubmit={cadastrarUsuario} className="conteudoregister">
        <div className="blocoregister">
          <h1 className=" titleregister">cadastrar</h1>
          <div id="inputs">
            <div className="inputpai">
              <label className="labelinput" htmlFor="name">
                nome
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type="text"
                  name="name"
                  id="name"
                  value={nome}
                  onChange={(usuario) => setNome(usuario.target.value)}
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
                  onChange={(usuario) => setCPF(usuario.target.value)}
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
                  onChange={(usuario) => setEmail(usuario.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Password">
                senha
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  value={senha}
                  onChange={(usuario) => setSenha(usuario.target.value)}
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
                confirmar senha
              </label>
              <div className="inputdiv">
                <input
                  className="inputtext1"
                  type={mostrarConfirmarSenha ? "text" : "password"}
                  name="confirmpassword"
                  value={confirmarSenha}
                  onChange={(usuario) => setConfirmarSenha(usuario.target.value)}
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
          <button className="buttonregister" onClick={cadastrarUsuario}>
            finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
