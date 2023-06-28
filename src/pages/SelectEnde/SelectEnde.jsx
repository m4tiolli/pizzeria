import './SelectEnde.css';
import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from "react";

function SelectEnde() {

    const navigate = useNavigate();

    const [enderecos, setEnderecos] = useState([]);

    const [isLoading, setIsLoading] = useState(true)


    function ListarEndereco(id) {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco/listarenderecos?id=" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setEnderecos(data);
                    setIsLoading(false)
                } else {
                    setEnderecos([]);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar endereços.");
            });
    }


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
                    <h1 className='txtSeleEnd'>selecionar endereço</h1>
                    <div ></div>
                    <button className='btnAdd' onClick={navCadastroEnde}>adicionar novo +</button>
                    <button className='btnAvancar' onClick={navFormasPagamento}>avançar</button>
                </div>
            </div>
        </div>
    );
};

export default SelectEnde;

