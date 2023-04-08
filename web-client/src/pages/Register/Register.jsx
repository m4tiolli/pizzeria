import "./Register.css";
import Header from "../../components/Header/Header";

function Register() {
  return (
    <div>
      <Header />
      <div className="conteudoregister">
        <div className="blocoregister">
          <div className="fundoRegister">
            <h1 className="titleregister">register</h1>
            <input
              className="input"
              type="text"
              name=""
              id=""
              placeholder="matiolli"
            />
            <br />
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
            <button className="buttonregister">register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
