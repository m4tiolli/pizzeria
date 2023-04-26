import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import { useNavigate } from "react-router-dom";
import Produto from '../../components/Item/CompProdutos'

export default function Produtos(){
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:44383/api/pizza",{
            method: "GET",
        })
        
            .then((response) => response.jason())
            .then((jason) => {setProdutos(jason);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar Produto");  
            });
}, []);

    const [produtos, setProdutos] = useState([]);
    return(
        <div>
            <Header />
            <div>
                <div ClassName="Produtos-Container">
                    {
                        produtos.map((produto, index) => (
                            <Produto produto={produto} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
   

