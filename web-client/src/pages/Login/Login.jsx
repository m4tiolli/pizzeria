import "./Login.css";
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  function navRecuperarSenha() {
    navigate("/RecuperarSenha")
  }
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
                name=""
                id="Email"
                placeholder="youremail@email.com"
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
                id="Password"
                placeholder="yourpassword"
              />
            </div>
            </div>
            <button className="esqueci" onClick={navRecuperarSenha} alt=''>Esqueci minha senha</button>
            <button className="buttonlogin">login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
