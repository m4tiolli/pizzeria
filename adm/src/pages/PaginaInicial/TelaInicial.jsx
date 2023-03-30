import React from 'react';
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import './style.css';


export default function TelaInicial() {
  const navigate = useNavigate();
  
  function mudarDePagina() {
    navigate("/Login");
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
          <section>
            <div className="circle"></div>
            <header>
              <a href="#">
                <img src={logo} alt="" className="logo" />
              </a>
              <nav className="navegation">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
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
            <div className="content">
              <div className="text">
                <h2>
                  THAT'S WHAT <br />
                  <span>I LIKE</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores autem eaque voluptas accusamus, illum, quisquam
                  distinctio adipisci iusto earum corrupti soluta tenetur
                  voluptatibus aperiam saepe vitae architecto eligendi
                  repellendus delectus?
                </p>
                <button onClick={mudarDePagina}>FAZER LOGIN</button>
              </div>
            </div>
            <ul className="icons">
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
            <div className="boxImg">
              <img src="img/cocacola1.png" alt="" className="img1" />
              <img src="img/cocacola2.png" alt="" className="img2" />
              <img src="img/cocacola3.png" alt="" className="img3" />
              <img src="img/cocacola4.png" alt="" className="img4" />
            </div>
          </section>
        </body>
      </html>
    </div>
  );
}
