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
                        <div className="inputdiv1">
                            <input
                            className="inputtext"
                            type="text"
                            name=""
                            id="Email"
                       
                            />
                        </div>
                        </div>
                        <div className="inputpai">
                            <label className="labelinput" htmlFor="CPF">CPF</label>
                        <div className="inputdiv1">
                            <input
                            className="inputtext"
                            type="CPF"
                            name=""
                            id="CPF"
                       
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