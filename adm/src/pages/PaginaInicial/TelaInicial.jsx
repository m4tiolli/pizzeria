import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaInicial.css';
import logo from "../../assets/logo.png"
import PizzaPepperoni from "../../assets/PizzaPepperoni.png"
import PizzaFrango from "../../assets/PizzaFrango.png"
import PizzaChocolate from "../../assets/PizzaChocolate.png"
import PizzaVegetal from "../../assets/PizzaVegetal.png"
import PizzaCalabresa from "../../assets/PizzaCalabresa.png"

export default function TelaInicial() {
  const navigate = useNavigate();

  let [imagem,setImagem] = useState(PizzaPepperoni);

  function mudarDePagina() {
    navigate('/Login');
  }
  
function TrocaImagem(caminho){
  setImagem(caminho);
}
  

  return (
    
      <div>
      <header>
        <div className="navigation-TelaInicial">
          <a href="#">
            <img src={logo} alt="Logo da Pizza" className="logo" />
          </a>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#" className="check">
                Home
              </a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
          </ul>
        </div>
      </header>
  
        <div className='section'>
          <div className="circle"></div>
          <div className="main-text">
            <img src="" alt="" />
            <h3>Pizzaria's ADM.</h3>
            
            <p>
            Administrar uma pizzaria exige organização e gestão eficiente de estoque e equipe para garantir a qualidade e satisfação dos clientes.
              <br />Conte com nossa expertise para otimizar seus processos e aumentar seus lucros.
            </p>
            <h6>Faça seu Login</h6>
            <button onClick={mudarDePagina} className="btn">
              FAZER LOGIN
            </button>
            <div className="text">
              <h5>Escolha sua cor favorita:</h5>
            </div>
            <div className="content">
              <span id="green" onClick={() => { TrocaImagem(PizzaVegetal); circleChange('#445c42'); }}>
              </span>
              <span id="brown" onClick={() => { TrocaImagem(PizzaChocolate); circleChange('#742a17'); }}>
              </span>
              {/* <span id="orange" onClick={() => { TrocaImagem(PizzaCalabresa); circleChange('#ff2200'); }}>
              </span>
              <span id="black" onClick={() => { TrocaImagem(PizzaPepperoni); circleChange('#092732'); }}>
              </span> */}
              <span id="white" onClick={() => { TrocaImagem(PizzaFrango); circleChange('#e0dbd7'); }}>
              </span>
              <span id="red" onClick={() => { TrocaImagem(PizzaPepperoni); circleChange('#ae0617'); }}>
              </span>
            </div>

          </div>
          <div className="main-img">
            <img 
                width="500"
                height="500"
            src={imagem} alt="Imagem da Pizza" id="pizza" />
          </div>
        </div>
    
   
      {/* Nova seção */}

      <div className='section' id='about'>
        
                <div className='text-about'>
                <h1>Hello</h1>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus? 
                   </p>
                  
                  </div>
    </div>
    

     
      </div>
   
  );
}



   {/* Função de mudar a cor do circulo */}
   function circleChange(color){
      const circle = document.querySelector('.circle');
      circle.style.background = color;
  }
  