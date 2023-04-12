import Header from "../../components/Header/Header";
import "./RecuperarSenha.css"
import { useNavigate } from 'react-router-dom'

function RecuperarSenha() {
    const navigate = useNavigate();

    function navRecuperarSenha2(){
        navigate("/RecuperarSenha2")
    }
    return(
        <div>
            <Header/>
            <div className="ConteudoRecuSenha1">
                <div className="BlocoRecuSenha1">
                    <div className="fundoRecuSenha1">
                        <h1 className="titleRecuSenha1">recuperar senha</h1>
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
                    <br/>
                    <button className="btnRecuperar1" onClick={navRecuperarSenha2}>Recuperar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecuperarSenha;