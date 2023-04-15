import React, { useState } from "react";

function Economia() {
  const [ganhos, setGanhos] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [mes, setMes] = useState("");

  const handleGanhosChange = (event) => {
    setGanhos(event.target.value);
  };

  const handleDespesasChange = (event) => {
    setDespesas(event.target.value);
  };

  const handleMesChange = (event) => {
    setMes(event.target.value);
  };

  const handleSalvarClick = () => {
    // Salva ganhos e despesas no banco de dados com o mês selecionado
    // Por exemplo, usando a API fetch() ou axios()
    console.log(`Salvando ganhos:${ganhos} despesas:${despesas} mês:${mes}`);
  };

  return (
    <div>
      <h2>Área de Economia</h2>
      <div>
        <label htmlFor="mes">Mês:</label>
        <input
          type="text"
          id="mes"
          value={mes}
          onChange={handleMesChange}
        />
      </div>
      <div>
        <label htmlFor="ganhos">Ganhos:</label>
        <input
          type="number"
          id="ganhos"
          value={ganhos}
          onChange={handleGanhosChange}
        />
      </div>
      <div>
        <label htmlFor="despesas">Despesas:</label>
        <input
          type="number"
          id="despesas"
          value={despesas}
          onChange={handleDespesasChange}
        />
      </div>
      <button onClick={handleSalvarClick}>Salvar</button>
    </div>
  );
}

export default Economia;
