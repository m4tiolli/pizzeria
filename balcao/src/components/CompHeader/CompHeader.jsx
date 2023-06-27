import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiReceipt } from 'react-icons/bi';
import { MdShoppingCart } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import "./CompHeader.css"

const Header = ({ onHomeClick, onDeliveryClick, onRetirarClick, onUserClick }) => {
  const iconStyle = { color: 'white' };

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="title-container">
        <h1 className="title">Pizzeria</h1>
        <div className="button-container">
          <button className="buttonTitle" onClick={onHomeClick}>
            <AiFillHome size={40} style={iconStyle} />
          </button>
          <button className="buttonTitle" onClick={onDeliveryClick}>
            <BiReceipt size={40} style={iconStyle} />
          </button>
          <button className="buttonTitle" onClick={onRetirarClick}>
            {/* Renderizar o ícone desejado para Retirar */}
            <MdShoppingCart size={40} style={iconStyle} />
          </button>
        </div>
        <button className="buttonTitle userButton" onClick={onUserClick}>
          <FaRegUser size={40} style={iconStyle} />
        </button>
      </div>
    </div>
  );
};

export default Header;
