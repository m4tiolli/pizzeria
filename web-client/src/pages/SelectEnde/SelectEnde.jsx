import './SelectEnde.css';
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

function SelectEnde (){
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    const navigate = useNavigate();

    function navFormasPagamento() {
        navigate("/FormasPagamento")
    }
    function navCadastroEnde() {
        navigate("/CadastroEnde")
    }
    return(
        <div id='enderecoprincipal'>
            <Header/>
            <div className='enderecocontainer'>
                <h1 className='txtSeleEnd'>Selecionar Endereço</h1>
                <input type='radio' name='option' value='Casa' className='casa' checked={selectedOption === "Casa"} onChange={handleOptionChange}/>Casa
                <input type='radio' name='option' value='Trabalho' className='trabalho' checked={selectedOption === "Trabalho"} onChange={handleOptionChange}/>Trabalho
                <button className='btnAdd+' onClick={navCadastroEnde}>adicionar novo +</button>
                <button className='btnAvancar' onClick={navFormasPagamento}>avancar</button>
            </div>
        </div>
          )
}

export default SelectEnde;