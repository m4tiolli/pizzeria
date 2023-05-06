import React from "react";
import "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
export default function Sidebar() {
    return (
<section id="sidebar">
<a href="#" className="brand">
  <i className="bx bxs-pizza icon" /> Pizzeria Admin
</a>
<ul className="side-menu">
  <li>
    <a href="#" className="active">
      <i className="bx bxs-dashboard icon" /> Dashboard
    </a>
  </li>
  <li className="divider" data-text="main">
    Main
  </li>
  <li>
    <a href="#">
      <i className="bx bxs-inbox icon" /> Services{" "}
      <i className="bx bx-chevron-right icon-right" />
    </a>
    <ul className="side-dropdown">
      <li>
        <a href="#">Produtos</a>
      </li>
      <li>
        <a href="#">Balcões</a>
      </li>
      <li>
        <a href="#">Estoque</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">
      <i className="bx bxs-chart icon" /> Charts
    </a>
  </li>
  <li>
    <a href="#">
      <i className="bx bxs-widget icon" /> Widgets
    </a>
  </li>
  <li className="divider" data-text="table and forms">
    Table and forms
  </li>
  <li>
    <a href="#">
      <i className="bx bx-table icon" /> Tables
    </a>
  </li>
  <li>
    <a href="#">
      <i className="bx bxs-notepad icon" /> Forms{" "}
      <i className="bx bx-chevron-right icon-right" />
    </a>
    <ul className="side-dropdown">
      <li>
        <a href="#">Basic</a>
      </li>
      <li>
        <a href="#">Select</a>
      </li>
      <li>
        <a href="#">Checkbox</a>
      </li>
      <li>
        <a href="#">Radio</a>
      </li>
    </ul>
  </li>
</ul>
<div className="ads">
  <div className="wrapper">
    <a href="#" className="btn-upgrade">
      Upgrade
    </a>
    <p>
      Become a <span>PRO</span> member and enjoy <span>All Features</span>
    </p>
  </div>
</div>
</section>
    )}