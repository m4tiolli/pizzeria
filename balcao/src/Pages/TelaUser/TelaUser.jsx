import { useNavigate } from "react-router-dom";
import { MdOutlineTableRestaurant, MdOutlineDeliveryDining } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import logo from '../../assets/logo.png';

export default function TelaUser() {
    const navigate = useNavigate();
    const iconStyle = { color: 'white' };

    function Home() {
        navigate("/");
      }
      function Delivery() {
        navigate("/delivery");
      }
      function Mesas() {
        navigate("/mesas");
      }
      function Retirar() {
        navigate("/retirar");
      }
      function User() {
        navigate("/user");
      }
    return (
        <div>
          <div id="root">
                <div className="header">
                    <img src={logo} alt="" className="logo" />
                    <h1 className="title">Pizzeria Balcão</h1>
                    <button className='buttonTitle' onClick={Home}><AiFillHome size={30} style={iconStyle}/></button>
                    <button className="buttonTitle" onClick={Delivery}> <MdOutlineDeliveryDining size={30} style={iconStyle} /> </button>
                    <button className="buttonTitle" onClick={Retirar}> <BsFillBagCheckFill size={30} style={iconStyle} /> </button>
                    <button className="buttonTitle" onClick={Mesas}> <MdOutlineTableRestaurant size={30} style={iconStyle} /> </button>
                    <button className="buttonTitle" onClick={User}> <FaRegUser size={30} style={iconStyle} /> </button>
                </div>
                <div className="descrição">
                <h1>Adminastrador Balcão</h1>
                </div>
                <div className="containerFaturamento">
                    <button>Caixa</button>

                    <h1>Faturamento do dia:</h1>
                    <h3> 20.03.2006</h3>
                    <h3>Semana 5</h3>
                    <h3>R$ 102.00</h3>
                </div>
            </div>
        </div>
    ) 
}