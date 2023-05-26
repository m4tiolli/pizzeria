import React, { useState } from 'react';

const ObservationButton = ({obeservacao, setObeservacao}) => {
  const [showObservationInput, setShowObservationInput] = useState(false);

  const handleButtonClick = () => {
    setShowObservationInput(!showObservationInput);
  };

  const handleInputChange = event => {
    setObeservacao(event.target.value);
  };

  return (
    <div>
      <button className="observacoes"onClick={handleButtonClick}>
        {showObservationInput ? 'Fechar' : 'obs'}
      </button>
      {showObservationInput && (
        <div>
          <input
            type="text"
            value={obeservacao}
            onChange={handleInputChange}
            placeholder="Digite sua observação"
          />
        </div>
      )}
    </div>
  );
};

export default ObservationButton;
