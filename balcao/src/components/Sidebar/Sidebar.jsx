import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function SidebarPizza({ carrinho, setSidebarOpen, atualizarCarrinho }) {


    function LimparCarrinho() {
         localStorage.removeItem("carrinho");
         atualizarCarrinho();
     }
     function FecharSidebar() {
         setSidebarOpen(false);
     }

     return (        
     <section id="sidebar">
         <div className="sidebar">
             <button onClick={LimparCarrinho}>Limpar Carrinho</button>
             <button onClick={FecharSidebar} >Fechar Carrinho</button>
             {carrinho?.map((item, key) => (
             <div className="ContainerPizzas" key={key}>
                 <img className='imagePizza' src={`data:image/png;base64,${item.imagem}`} alt="imagem" />

                 <div className="Textos">
                     <h1 className='nomePizza'>{item.nome}</h1>
                     <h3 className='descricaoPizza' >{item.descricao}</h3>
                     <h3 className='precoPizza'>{item.preco}</h3>
                     {item.observacao && <h3 className='observacao'>{item.observacao}</h3>}
                     <button className="adicionar"></button>
                     <button className="remover"></button>
                 </div>
            </div>
             ))}
         </div> 
    </section>      
    );
};