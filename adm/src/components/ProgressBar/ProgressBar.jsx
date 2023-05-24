import React, { useState } from 'react';

const ProgressBarExample = () => {
  const [valorAtual, setValorAtual] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // Função para calcular a porcentagem
  const calcularPorcentagem = () => {
    const porcentagem = (valorAtual / valorTotal) * 100;
    setPercentage(porcentagem);
  };

  // Exemplo de uso: chame a função calcularPorcentagem sempre que houver uma atualização nos valores

  return (
    <div>
      <h2>Progress Bar Example</h2>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${percentage}%` }}></div>
      </div>
      <p>{percentage}%</p>
    </div>
  );
};

export default ProgressBarExample;

