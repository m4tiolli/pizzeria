import React, { useState } from 'react';
import { MdOutlineManageSearch } from 'react-icons/md';

const ObservationButton = ({ obeservacao, setObeservacao }) => {
  const [showObservationInput, setShowObservationInput] = useState(false);

  const handleButtonClick = () => {
    setShowObservationInput(!showObservationInput);
  };

  const handleInputChange = event => {
    setObeservacao(event.target.value);
  };

  return (
    <div>
      <button className="observacoes" onClick={handleButtonClick}>
        <MdOutlineManageSearch size={30} />
        {showObservationInput ? 'Fechar' : ''}
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
