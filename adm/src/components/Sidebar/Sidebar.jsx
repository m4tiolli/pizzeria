import React, { useState } from 'react';

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDropdownClick = (e, index) => {
    e.preventDefault();
    toggleDropdown(index);
  };

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
          <a
            href="#"
            className={activeDropdown === 1 ? 'active' : ''}
            onClick={(e) => handleDropdownClick(e, 1)}
          >
            <i className="bx bxs-inbox icon" /> Services{' '}
            <i className="bx bx-chevron-right icon-right" />
          </a>
          <ul className={`side-dropdown ${activeDropdown === 1 ? 'show' : ''}`}>
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
          <a
            href="#"
            className={activeDropdown === 2 ? 'active' : ''}
            onClick={(e) => handleDropdownClick(e, 2)}
          >
            <i className="bx bxs-notepad icon" /> Forms{' '}
            <i className="bx bx-chevron-right icon-right" />
          </a>
          <ul className={`side-dropdown ${activeDropdown === 2 ? 'show' : ''}`}>
            <li>
              <a href="#">Cadastro de Balcões</a>
            </li>
            <li>
              <a href="#">Cadastro de Produtos</a>
            </li>
            <li>
              <a href="#">Cadastro de Mesas</a>
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
  );
};

export default Sidebar;
