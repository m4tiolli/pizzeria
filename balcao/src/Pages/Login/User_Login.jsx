import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./User_Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [password, setPassword] = useState("");

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function togglePasswordVisibility() {
    setPasswordVisible((prevVisible) => !prevVisible);
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  }

  function mudarDePagina() {
    navigate("/");
  }

  return (
    <div>
      <div className="headerLogin">
        <img src={logo} alt="" className="logo" />
        <h1 className="title">Pizzeria Balcão</h1>
      </div>

      <div className="container">
        <div className="block">
          <h1 className="info">
            Sign in with your <br /> Atendent account
          </h1>
          <input type="text" className="input" placeholder="User" name="" id="" />

          <div className="inputContainer">
            <input
              type={inputType}
              className="input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              className={`passwordVisibilityButton ${passwordVisible ? "visible" : ""}`}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </button>
          </div>

          <br />
          <button className="buttonLogin" type="submit" onClick={mudarDePagina}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
