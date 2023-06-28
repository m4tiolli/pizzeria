import Header from "../../components/Header/Header";
import "./EditarEnde.css";
import { useState, useEffect } from "react";
import { DadosUsuario } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

function Endereco({ endereco }) {
   
    const navigate = useNavigate();
    //Checar
    const [checked, setChecked] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);

    //Dados do endereço
    const [address, setAddress] = useState();

    //Campos para editar
    const [bairro, setBairro] = useState("");
    const [ruaAvenida, setRuaAvenida] = useState("");
    const [numero, setNumero] = useState("");
    const [cep, setCEP] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    //Dados do usuario
    const [usuario, setUsuario] = useState("");

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
    }, []);

    useEffect(() => {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco/" + endereco?.id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setAddress(json))
            .catch((err) => {
                console.log(err);
                alert("Erro ao buscar");
            });
    }, []);

    useEffect(() => {
        if (address) {
            setEstado (address?.estado);
            setCidade(address?.cidade);
            setBairro(address?.bairro);
            setRuaAvenida(address?.ruaAvenida);
            setNumero(address?.numero);
            setCEP(address?.cep);
        }
    }, [address]);

    //Corpo para edição de dados
    const body = { idendereco: endereco?.id, estado, cidade, bairro, ruaAvenida, numero, cep };

    function EditarEnde() {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((response) => {
                alert("Dados editados com sucesso");
            })
            .then(() => setModalEditVisible(!modalEditVisible))
            .catch((err) => {
                console.log(err);
                alert("Erro ao editar os usuarios");
            });
    }

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
                  onChange={setCEP}
                  value={endereco.cep}
  
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
                  onChange={setBairro}
                  value={endereco.bairro}
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
                  onChange={setRuaAvenida}
                  value={endereco.ruaAvenida}
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
                  onChange={setNumero}
                  value={endereco.numero}
  
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
                  onChange={setEstado}
                  value={endereco.estado}
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
                  onChange={setCidade}
                  value={endereco.cidade}
                  readOnly
                />
              </div>
            </div>
            <button className="buttonlogin" alt='' onClick={EditarEnde}>Alterar</button>
          </div>
        </div>
      </div>
    )
}

export default Endereco;