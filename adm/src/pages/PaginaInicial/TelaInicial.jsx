import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';

export default function TelaInicial() {
  const navigate = useNavigate();

  function mudarDePagina() {
    navigate("/Login");
  }

  return (
    
   <button href="#" onClick={mudarDePagina}>FAZER LOGIN</button>

  );
}
