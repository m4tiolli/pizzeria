import "./Login.css";
import Header from "../../components/Header/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="conteudologin">
        <div className="blocologin">
          <div className="fundoLogin">
            <h1 className="titlelogin">login</h1>
            <input
              className="input"
              type="text"
              name=""
              id=""
              placeholder="youremail@email.com"
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="yourpassword"
              name=""
              id=""
            />
            <button className="esqueci">Esqueci minha senha</button>
            <button className="buttonlogin">login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
