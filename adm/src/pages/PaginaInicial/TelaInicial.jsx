import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function TelaInicial() {
  const navigate = useNavigate();

  function mudarDePagina() {
    navigate('/Login');
  }

  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="style.css" />
          <title>Document</title>
        </head>
        <body>
          <div className='blablabla'>
            <div className="circle"></div>
            <header>
              <a href="#">
                <img alt="" className="logo" />
              </a>
              <nav className="navegation">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </header>
            <div id="home" className="content">
              <div className="text">
                <h2>
                  THAT'S WHAT IS<br />
                  <span>PIZZE</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?
                </p>
                <button onClick={mudarDePagina}>FAZER LOGIN</button>
              </div>
            </div>
            <ul id="icons" className="icons">
              <li>
                <a href="#">
                  <img src="img/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/instagram.png" alt="" />
                </a>
              </li>
            </ul>
            </div>

          {/* Nova seção */}
          <div className="circle"></div>
      <div class="blablabla about" id="about">
      
                <h3 class="sub-heading">about us</h3>
                <h1 class="heading">why choose us?</h1>
                <div className='content'>
                <div className='text'>
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
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                  autem eaque voluptas accusamus, illum, quisquam distinctio adipisci
                  iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae
                  architecto eligendi repellendus delectus?</p>
                  </div>
                  </div>
                 
          <div class="row">
                <div class="image">
                    <img src="" alt="" />
                </div>
           </div>
          <span></span>
      </div>
           
        </body>
      </html>
    </div>
  );
}