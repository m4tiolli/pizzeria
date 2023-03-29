import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';

export default function TelaInicial() {
  const navigate = useNavigate();

  function mudarDePagina() {
    navigate("/Login");
  }

  return (
    <div>
      <div class="circle"></div>
      <a href="#"><img src="img/logo.png" alt="" class="logo" /></a>
      <nav class="navegation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="content">
        <div class="text">
          <h2>THAT'S WHAT <br /><span>I LIKE</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem eaque voluptas accusamus, illum, quisquam distinctio adipisci iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae architecto eligendi repellendus delectus?</p>
          <button href="#" onClick={mudarDePagina}>FAZER LOGIN</button>
        </div>
      </div>
      <ul class="icons">
        <li><a href="#"><img src="img/facebook.png" alt="" /></a></li>
        <li><a href="#"><img src="img/twitter.png" alt="" /></a></li>
        <li><a href="#"><img src="img/instagram.png" alt="" /></a></li>
      </ul>
      <div class="boxImg">
        <img src="img/cocacola1.png" alt="" class="img1" />
        <img src="img/cocacola2.png" alt="" class="img2" />
        <img src="img/cocacola3.png" alt="" class="img3" />
        <img src="img/cocacola4.png" alt="" class="img4" />
      </div>
    </div>
  );
}
