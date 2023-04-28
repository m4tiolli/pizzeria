
import "./Login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function mudarDePagina() {
      navigate("/Services");
  }
  
  return (
    
    <div classname="body">
      <div className="login-container">
        <div className="buttonsForm">
          <div className="btnColor"></div>
          <login-button id="btnSignin">Sign in</login-button>
          <login-button id="btnSignup" >Sign up</login-button>
        </div>
    
        <form id="signin">
          <input type="text" placeholder="Email" required />
          <i className="fas fa-envelope iEmail"></i>
          <input type="password" placeholder="Password" required />
          <i className="fas fa-lock iPassword"></i>
          <div className="divCheck">
            <input type="checkbox" />
            <span>Remember Password</span>
          </div>
          <button type="submit">Sign in</button>
        </form>
    
        <form id="signup">
          <input type="text" placeholder="Email" required />
          <i className="fas fa-envelope iEmail"></i>
          <input type="password" placeholder="Password" required />
          <i className="fas fa-lock iPassword"></i>
          <input type="password" placeholder="Password" required />
          <i className="fas fa-lock iPassword2"></i>
          <div className="divCheck">
            <input type="checkbox" required />
            <span>Terms</span>
          </div>
          <login-button type="submit" onClick={mudarDePagina}>Sign up</login-button>
        </form>
      </div>
    
      <script src="Login.js"></script>
    </div>
   
  );
}