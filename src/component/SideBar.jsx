import React from "react";

const SideBar = () => {
  return (
    <div>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <li className="nav-item">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">BatuSquad <sup></sup></div>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <div className="sidebar-heading">Interface</div>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="cards.html">
            <i className="fas fa-fw fa-cog"></i>
            <span>Pra-usulan</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
