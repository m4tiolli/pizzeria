import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  function mudarDePagina() {
    navigate("/Services");
  }
  function handleSignUpClick() {
    containerRef.current.classList.add("right-panel-active");
  }
  function handleSignInClick() {
    containerRef.current.classList.remove("right-panel-active");
  }
  return (
    <div className="Login">
    <div className="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1 className="info">Criar Conta</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou use seu e-mail para cadastro</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="Login-button">Cadastrar-se</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="info">Entrar</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou use sua conta</span>
          <input type="email" placeholder="Email" />
          
          <input type="password" placeholder="Password" />
          <a href="#">Esqueceu sua senha?</a>
          <button  className="Login-button" onClick={mudarDePagina}>Entrar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bem-vindo de volta!</h1>
            <p>
            Para manter-se conectado conosco, faça login com seus dados pessoais
            </p>
            <button className="Login-button-ghost" onClick={handleSignInClick} id="signIn">
              Entrar
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Olá!</h1>
            <p>Introduza os seus dados para abrir uma conta connosco</p>
            <button className="Login-button-ghost" onClick={handleSignUpClick} id="signUp">
              Cadastrar-se
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
);

}

