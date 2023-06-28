import Header from "../../components/Header/Header";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import "./PagamentoRealizado.css";

function pagamentoRealizado(){

    return(
    <div>
        <Header></Header>
        <div className="TudoRealizado">
            <AiFillCheckCircle size={300} className="imgPagamento"/>
            <h1 className="titlePagamento">pagamento realizado com sucesso!</h1>
        </div>
    </div>
    );
};

export default pagamentoRealizado;