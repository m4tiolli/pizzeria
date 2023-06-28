import Header from "../../components/Header/Header";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import React, { useRef, useState, useEffect } from "react";
import { ChecarLoginUsuario, SalvarJWT } from "../../components/AuthContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const navRecuperarSenha = () => {
    navigate("/RecuperarSenha");
  };

  const secondInputRef = useRef();

  const handleFirstInputSubmit = () => {
    secondInputRef.current.focus();
  };

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    verificarLogin();
  }, []);

  async function verificarLogin() {
    const usuarioLogado = await ChecarLoginUsuario();
    if (usuarioLogado) {
      navigate("/");
    }
  }

  function Login() {
    if (email === "" || senha === "") {
      alert("Preencha todos os campos.");
    } else {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("senha", senha);
      axios
        .post("https://pizzeria3.azurewebsites.net/api/auth/login", formData.toString(), {
          headers: { "Content-type": "application/x-www-form-urlencoded" },
        })
        .then((response) => {
          SalvarJWT(response.data.token);
        })
        .then(() => navigate("/"))
        .catch((err) => {
          alert("Usuário ou senha inválidos.");
          console.log(err);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="conteudologin">
        <div className="blocologin">
          <div className="fundoLogin">
            <h1 className="titlelogin">entrar</h1>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Email">e-mail</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"

                  name="email"
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onSubmit={handleFirstInputSubmit}
                />
              </div>
            </div>
            <br />
            <div className="inputpai">
              <label className="labelinput" htmlFor="Password">senha</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  id="Password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onSubmit={null}
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
            {/* <button className="esqueci" onClick={navRecuperarSenha}>Esqueci minha senha</button> */}
            <button className="buttonlogin" onClick={() => Login()}>finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
