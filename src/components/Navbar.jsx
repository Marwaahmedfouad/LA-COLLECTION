import React from "react";
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            
            </ul>

            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
              <i class="fa fa-sign-in me-1" aria-hidden="true"></i>login</NavLink>

              <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <i class="fa fa-user-plus me-1" aria-hidden="true"></i>Register</NavLink>

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i class="fa fa-shopping-Cart me-1" aria-hidden="true"></i>Cart(0)</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
