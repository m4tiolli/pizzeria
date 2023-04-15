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
            <div className="inputpai">
              <label className="labelinput" htmlFor="name">name</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="name"
                name=""
                id="name"
                placeholder="yourname"
              />
            </div>
            </div>
            <br />
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
            <div className="inputpai">
              <label className="labelinput" htmlFor="CPF">CPF</label>
            <div className="inputdiv">
              <input
                className="inputtext"
                type="CPF"
                name=""
                id="CPF"
                placeholder="000.000.000-00"
              />
            </div>
            </div>
            <button className="buttonregister">register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
