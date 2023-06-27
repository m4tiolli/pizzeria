import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <section id="content">
    <div>
      <nav>
        {/* <i className="bx bx-menu toggle-sidebar"></i> */}
        <form action="#">
          <div>
            <h1 className="title_Header">Pizzeria Admin</h1>
          </div>
        </form>
        <span className="divider"></span>
        <div className="profile">
          <img src={logo} alt="" />
          <ul className="profile-link">
            {/* <li>
              <a href="#">
                <i className="bx bxs-user-circle icon"></i> Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-cog"></i> Settings
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-log-out-circle"></i> Logout
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
    </section>
  );
}
