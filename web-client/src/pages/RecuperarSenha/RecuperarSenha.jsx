import Header from "../../components/Header/Header";
import "./RecuperarSenha.css"

function RecuperarSenha() {
    return(
        <div>
            <Header/>
            <div className="BlocoRecuSenha1">
                <div className="fundoRecuSenha1">
                <h1>Recuperar senha</h1>
                <input 
                className="inputRecuSenha1" 
                type="Email"
                placeholder="youremail@email.com"  
                id=""
                />
                <br/>
                <button className="btnRecuperar1">Recuperar</button>
                </div>
            </div>
        </div>
    )
}
export default RecuperarSenha;