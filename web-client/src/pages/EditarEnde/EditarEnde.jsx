import Header from "../../components/Header/Header";
import "./EditarEnde.css";

function EditarEnde(){

    return(
        <div>
        <Header />
        <div className="conteudoCadastroEnde">
          <div className="blocoLoginCadastroEnde">
            <h1 className="title">Editar Endereço</h1>
            <div className="inputpai">
              <label className="labelinput" htmlFor="CEP" >CEP</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name=""
                  id="CEP"
  
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Bairro">Bairro</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name=""
                  id="Bairro"
                 
                  readOnly
                
  
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Rua/Avenida">Rua/Avenida</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name=""
                  id="Rua/Avenida"
                readOnly
              
  
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Número">Número</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="number"
                  name=""
                  id="Número"
            
  
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Estado">Estado</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name=""
                  id="Estado"
              
                  readOnly
               
                />
              </div>
            </div>
            <div className="inputpai">
              <label className="labelinput" htmlFor="Cidade">Cidade</label>
              <div className="inputdiv">
                <input
                  className="inputtext"
                  type="text"
                  name=""
                  id="Cidade"
                
                  readOnly
                 
  
                />
              </div>
            </div>
            <button className="buttonlogin" alt=''>Alterar</button>
          </div>
        </div>
      </div>
    )
}

export default EditarEnde;