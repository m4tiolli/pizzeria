import React from 'react';
import logo from "../../assets/logo.png";

export default function VerProdutos() {

    return (
        <html>
            <head>

            </head>
            <body>
                <div class="containerVerProdutos">
                    <div class="headerVerProdutos">
                        <span>Ver Produtos</span>
                        <button onClick="openModal()" id='new'><i>Incluir</i></button>
                    </div>

                    <div class="divTable">

                        <table>
                            {/* a tag "thead" envolve a linha de cabeçalho */}
                            <thead>

                                <tr>
                                    <th>Nome</th>
                                    <th>Teste - Função</th>
                                    <th>Teste - Preço</th>
                                    <th class="acao">Editar</th>   
                                    <th class="acao">Excluir</th>        
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="modal-container">
                        <div class="modal">
                            <form>
                                <label For="m-nome">Nome</label>
                                <input id="m-nome" type="text" />

                                <label For="m-funcao">Função</label>
                                <input id="m-funcao" type="text" />

                                <label For="m-salario">Salário</label>
                                <input type="m-salario" />
                                <button id="btnSalvar">Salvar</button>
                            </form>
                        </div>
                    </div>
                    <script src="script.js"></script>
                </div>
            </body>






                {/* <div className="services-container">
                    <div className="header">
                        <img src={logo} alt="" className="logo" />
                        <h1 className="title">Pizzeria</h1>
                    </div>
                    <div className="buttoncontainer">
                        <h1 className="services-title">Ver Produtos</h1>
                    </div>
                </div> */}

      </html>
    );

  }
  