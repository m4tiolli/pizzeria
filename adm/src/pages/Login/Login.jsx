import "./Login.css"
import logo from "../../assets/logo.png"

export default function Login() {
    return (
        <div>
            <div className="header">
       
                    <img src={logo} alt="" className="logo" />
                    <h1 className="title">Pizzeria Admin</h1>
            </div>
          
            <div className="container">
                <div className="block">
                    <h1 className="info">Sign in with your <br /> admin account</h1><br />
                    <input type="text" className="input" placeholder="User" name="" id="" /><br />
                    <input type="text" className="input" placeholder="Password" name="" id="" /><br />
                    <button className="button">Login</button>
                </div>
            </div>
            
        </div>
    )
}