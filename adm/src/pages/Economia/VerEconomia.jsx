import React,{useState} from 'react';
import './VerEconomia.css'



export default function VerEconomia() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="VerEconomia.css" />
  <title>AdminSite</title>
  {/* SIDEBAR */}
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
  {/* SIDEBAR */}
  {/* NAVBAR */}
  <section id="content">
    {/* NAVBAR */}
    <nav>
      <i className="bx bx-menu toggle-sidebar" />
      <form action="#">
        <div className="">
          <h1 className="title">Pizzeria Admin</h1>
        </div>
      </form>
      <a href="#" className="nav-link">
        <i className="bx bxs-bell icon" />
        <span className="badge">5</span>
      </a>
      <a href="#" className="nav-link">
        <i className="bx bxs-message-square-dots icon" />
        <span className="badge">8</span>
      </a>
      <span className="divider" />
      <div className="profile">
        <img src="" alt="" />
        <ul className="profile-link">
          <li>
            <a href="#">
              <i className="bx bxs-user-circle icon" /> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-cog" /> Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-log-out-circle" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* NAVBAR */}
    {/* MAIN */}
    <main>
      <h1 className="title">Dashboard</h1>
      <ul className="breadcrumbs">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="divider">/</li>
        <li>
          <a href="#" className="active">
            Dashboard
          </a>
        </li>
      </ul>
      <div className="info-data">
        <div className="card">
          <div className="head">
            <div>
              <h2>1500</h2>
              <p>Traffic</p>
            </div>
            <i className="bx bx-trending-up icon" />
          </div>
          <span className="progress" data-value="40%" />
          <span className="label">40%</span>
        </div>
        <div className="card">
          <div className="head">
            <div>
              <h2>234</h2>
              <p>Sales</p>
            </div>
            <i className="bx bx-trending-down icon down" />
          </div>
          <span className="progress" data-value="60%" />
          <span className="label">60%</span>
        </div>
        <div className="card">
          <div className="head">
            <div>
              <h2>465</h2>
              <p>Pageviews</p>
            </div>
            <i className="bx bx-trending-up icon" />
          </div>
          <span className="progress" data-value="30%" />
          <span className="label">30%</span>
        </div>
        <div className="card">
          <div className="head">
            <div>
              <h2>235</h2>
              <p>Visitors</p>
            </div>
            <i className="bx bx-trending-up icon" />
          </div>
          <span className="progress" data-value="80%" />
          <span className="label">80%</span>
        </div>
      </div>
      {/* Graffic Sales Report */}
      <div className="data">
        <div className="content-data">
          <div className="head">
            <h3>Sales Report</h3>
            <div className="menu">
              <i className="bx bx-dots-horizontal-rounded icon" />
              <ul className="menu-link">
                <li>
                  <a href="#">Edit</a>
                </li>
                <li>
                  <a href="#">Save</a>
                </li>
                <li>
                  <a href="#">Remove</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Chart - Sales Report */}
          <div className="chart">
            <div id="chart" />
          </div>
        </div>
        <div className="content-data">
          <div className="head">
            <li>
              <a href="#">Relatório Mensal</a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="active">
                Relatório Anual
              </a>
            </li>
            <div className="menu">
              <i className="bx bx-dots-horizontal-rounded icon" />
              <ul className="menu-link">
                <li>
                  <a href="#">Edit</a>
                </li>
                <li>
                  <a href="#">Save</a>
                </li>
                <li>
                  <a href="#">Remove</a>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </main>
    {/* MAIN */}
  </section>
  {/* NAVBAR */}

</>

  );
}