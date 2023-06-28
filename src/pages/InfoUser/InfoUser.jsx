import Header from "../../components/Header/Header";
import "./InfoUser.css";
import { BiUser } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function InfoUser(usuario){

    const navigate = useNavigate();
    
    function editarUser(){
        navigate("/EditarUser")
    }
    function editarEnde(){
        navigate("/EditarEnde")
    }
    function editarCartao(){
        navigate("/EditarCartao")
    }


    return(
        <div>
            <Header/>
            <div className="divSelectEditar">
                <h1 className="titleName" >Isaque</h1>
                <div className="linha"></div>
                <div className="divEditarPerfil" onClick={editarUser}>
                    <h1 className="titleEditarPerfil">editar perfil</h1>
                    <BiUser className="imgPerfil1" size={20}/>
                </div>
                <div className="divEditarEnde" onClick={editarEnde}>
                    <h1 className="titleEditarEnde">meus endereços</h1>
                    <FaMapMarkerAlt className="imgEnde1" size={20}/>
                </div>
                <div className="divEditarCartao" onClick={editarCartao}>
                    <h1 className="titleEditarCartao">formas de pagamento</h1>
                    <AiFillCreditCard className="imgCartao1" size={20}/>
                </div>
            </div>
        </div>
    )
}

export default InfoUser;