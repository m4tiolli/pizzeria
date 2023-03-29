import "./Login.css"
import logo from "../../assets/logo.png"

import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function mudarDePagina() {
        navigate("/Services");
    }

    return (
        <div>
            <div className="header">

                    <img src={logo} alt="" className="logo" />
                    <h1 className="title">Pizzeria Admin</h1>
            </div>
          
            <div className="container">
                <div className="block">
                    <h1 className="info">Sign in with your <br /> admin account</h1>
                    <input type="text" className="input" placeholder="User" name="" id="" /><br />
                    <input type="text" className="input" placeholder="Password" name="" id="" /><br />
                    {/*<button className="button">Login</button>*/}
                  <button className="buttonLogin" onClick={mudarDePagina}>Login</button>
                </div>
            </div>
        </div>
    )
}

