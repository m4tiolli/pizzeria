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
            <div className='conteudoEndereco'>
            <div className='blocoEndereco'>
            <div className='fundoEndereco'>
                <h1 className='txtSeleEnd'>Selecionar Endereço</h1>
            <div className='divRadio'>
                <input type='radio' name='option' value='Casa' className='casa' checked={selectedOption === "Casa"} onChange={handleOptionChange}/>Casa
            </div>
                <input type='radio' name='option' value='Trabalho' className='trabalho' checked={selectedOption === "Trabalho"} onChange={handleOptionChange}/>Trabalho
            <div>
                <button className='btnAdd' onClick={navCadastroEnde}>adicionar novo +</button>
            </div>
            <div>
                <button className='btnAvancar' onClick={navFormasPagamento}>avancar</button>
            </div>
            </div>
            </div>
            </div>
        </div>
          )
}

export default SelectEnde;