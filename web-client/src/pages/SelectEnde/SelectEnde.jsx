import './SelectEnde.css';
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom'
import React from 'react';

function SelectEnde() {

    const navigate = useNavigate();

    function navFormasPagamento() {
        navigate("/FormasPagamento")
    }
    function navCadastroEnde() {
        navigate("/CadastroEnde")
    }
    return (
        <div id='enderecoprincipal'>
            <Header />
            <div className='conteudoEndereco'>
                <div className='blocoEndereco'>
                    <h1 className='txtSeleEnd'>Selecionar Endereço</h1>
                    <div ></div>
                    <button className='btnAdd' onClick={navCadastroEnde}>adicionar novo +</button>
                    <button className='btnAvancar' onClick={navFormasPagamento}>avancar</button>
                </div>
            </div>
        </div>
    );
};

export default SelectEnde;

