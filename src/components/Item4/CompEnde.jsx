import "./CompMostrarEnde.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DadosUsuario } from "../AuthContext";

export default function AddressMethods() {
  const [modalNewVisible, setModalNewVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [rua, setRua] = useState("");
  const [numCasa, setNumCasa] = useState("");
  const [cep, setCEP] = useState("");
  const [uf, setUF] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [tipo, setTipo] = useState("");

  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Simulação de chamada assíncrona para buscar os endereços
      const response = await fetch("https://pizzeria3.azurewebsites.net/api/endereco/listarenderecos?id=" + id);
      const data = await response.json();
      if (Array.isArray(data)) {
        setEnderecos(data);
      } else {
        setEnderecos([]);
      }
    }
    fetchData();
  }, []);

  function CadastrarEndereco() {
    const body = { uf, cidade, bairro, rua, numCasa, cep };
    fetch("https://localhost:44383/api/endereco", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then(() => {
      alert("Endereço cadastrado com sucesso.");
      // Navegar para a página AddressMethods (seção de navegação não fornecida)
    })
    .catch((error) => console.log(error));
  }

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#efefef", alignItems: 'center', paddingTop: "20%" }}>
      <button onClick={() => setModalNewVisible(!modalNewVisible)}>Add New</button>

      {enderecos.map((endereco, index) => (
        <Address key={index} endereco={endereco} />
      ))}

      {modalNewVisible && (
        <div>
          <button onClick={() => setModalNewVisible(false)}>Close</button>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCEP(e.target.value)}
            placeholder="Ex: 12345-678"
          />
          {/* Resto dos campos do formulário */}
          <button onClick={CadastrarEndereco}>Confirm</button>
        </div>
      )}
    </div>
  );
}