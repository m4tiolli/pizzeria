import React from "react";
import { GrAdd } from 'react-icons/gr';
import { MdRemove } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';
import "./Sidebar.css";

export default function SidebarPizza({ carrinho, setSidebarOpen, atualizarCarrinho, isSidebarOpen }) {
    function LimparCarrinho() {
        localStorage.removeItem("carrinho");
        atualizarCarrinho();
    }

<<<<<<< HEAD
    function FecharSidebar() {
        setSidebarOpen(false);
    }
=======
     return (        
     <section id="sidebar">
         <div className="sidebar">
             <button onClick={LimparCarrinho}>Limpar Carrinho</button>
             <button onClick={FecharSidebar} >Fechar Carrinho</button>
             {carrinho?.map((item, key) => (
             <div className="ContainerPizzaske" y={key}>
                 <img className='imagePizza' src={`data:image/png;base64,${item.imagem}`} alt="imagem" />
>>>>>>> d70551dd (ALgumas coisinhas)

    function RemoverItemCarrinho(index) {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        atualizarCarrinho();
    }

    return (
        <section id="sidebar">
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="buttonContainer">
                    <button className="limparCarrinho" onClick={LimparCarrinho}>
                        <RiDeleteBin5Line size={30} />
                    </button>
                    <button className="fecharCarrinho" onClick={FecharSidebar}>
                        <AiFillCloseCircle size={30} />
                    </button>
                    <button className="buttonFinalisarPedido">
                        <BsCheckLg size={30} />
                    </button>
                </div>
            </div>
            <div className={`itemContainer ${isSidebarOpen ? "moveItems" : ""}`}>
                {carrinho?.map((item, index) => (
                    <div className="ContainerPizzas" key={index}>
                        <img className="imagePizza" src={`data:image/png;base64,${item.imagem}`} alt="imagem" />

                        <div className="Textos">
                            <h1 className="nomePizza">{item.nome}</h1>
                            <h3 className="descricaoPizza">{item.descricao}</h3>
                            <h3 className="precoPizza">{item.valor}</h3>
                            {item.observacao && <h3 className="observacao">{item.observacao}</h3>}
                            <div className="buttonContainer">
                                <button className="adicionar">
                                    <GrAdd size={30} />
                                </button>
                                <h3>1</h3>
                                <button className="remover" onClick={() => RemoverItemCarrinho(index)}>
                                    <MdRemove size={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
