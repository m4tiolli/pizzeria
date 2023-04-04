import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


export default function Test_TelaInicial() {
  const navigate = useNavigate();
  
  useEffect(() => {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('#navbar');
  
    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    }
  }, []);

  return (
    
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'/>
        <link rel="stylesheet" href='css/style.css'/>
      </head>
      <body>
        <header>
          <a href="#" class="logo"><i class="fas fa-untensils"></i>resto.</a>
          <nav class="navbar" id="navbar">
            <a class='active' href='#home'></a>
            <a href='#dishes'></a>
            <a href='#about'></a>
            <a href='#menu'></a>
            <a href='#review'></a>
            <a href='#order'></a>
          </nav>
          <div class="icons">
            <i className="fas fa-bars" id='menu-bars'></i>
            <i className="fas fa-search" id='search-icon'></i>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
          </div>
        </header>
    
        <form action=''id='search-form'>
          <input type="search" placeholder='search here...' name='' id='search-box' />
          <label for="search-box" class='fas fa-search'></label>
        </form>
      </body>
    </html>
  )
}
