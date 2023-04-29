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
    <div className="body">
    <div className="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
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
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
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
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button onClick={mudarDePagina}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal details
            </p>
            <button className="ghost" onClick={handleSignInClick} id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hi There!</h1>
            <p>Enter your personal details to open an account with us</p>
            <button className="ghost" onClick={handleSignUpClick} id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
);

}

