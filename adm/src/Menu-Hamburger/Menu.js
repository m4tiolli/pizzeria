import React from "react";
import { FaBars } from "react-icons/fa";

function Menu() {
  return (
    <nav>
      <div className="menu-icon">
        <FaBars />
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;