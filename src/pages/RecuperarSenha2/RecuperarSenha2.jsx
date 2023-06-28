import Header from "../../components/Header/Header";
import "./RecuperarSenha2";

function RecuperarSenha2(){
    return(
        <div>
            <Header/>
            <div className="ConteudoRecuSenha1">
                <div className="BlocoRecuSenha1">
                    <div className="fundoRecuSenha1">
                        <h1 className="titleRecuSenha1">recuperar senha</h1>
                        <div className="inputpai">
                            <label className="labelinput" htmlFor="NovaSenha">Nova senha</label>
                        <div className="inputdiv">
                            <input
                            className="inputtext"
                            type="Password"
                            name=""
                            id="NovaSenha"
                        
                            />
                        </div>
                        </div>
                        <div className="inputpai">
                            <label className="labelinput" htmlFor="ConfirSenha">Confirmar Senha</label>
                        <div className="inputdiv">
                            <input
                            className="inputtext"
                            type="CPF"
                            name=""
                            id="ConfirSenha"
                          
                            />
                        </div>
                        </div>
                    <br/>
                    <button className="btnRecuperar1">Recuperar</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default RecuperarSenha2;