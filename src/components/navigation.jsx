import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div className="brand-container">
            <NavLink className="navbar-brand" to="/">
              European Students Association
            </NavLink>
            </div>
            <div className = "image-container">
                <img src={require('./../../src/images/logo2.png')} alt="European Students Association Logo" className="brand-logo" />
            </div>
          <div className="nav-links-container">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/merch">
                  Merchandise
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/archive">
                  Archive
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/board">
                  Board Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navigation;