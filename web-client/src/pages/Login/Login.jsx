import "./Login.css";
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navRecuperarSenha = () => {
    navigate("/RecuperarSenha");
  };

  const fazerLogin = () => {
    // Lógica para fazer login com o email e senha fornecidos
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div>
      <Header />
      <div className="conteudologin">
        <div className="blocologin">
          <div className="fundoLogin">
            <h1 className="titlelogin">login</h1>
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
                />
              </div>
            </div>
            <br />
            <div className="inputpai">
              <label className="labelinput" htmlFor="Password">password</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  id="Password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
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
            <button className="esqueci" onClick={navRecuperarSenha}>Esqueci minha senha</button>
            <button className="buttonlogin" onClick={fazerLogin}>login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
