import React from "react";
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    
    <section className="bg-body-tertiary">
      <div className="container">
        <nav className="navbar p-0 navbar-expand-lg font-small">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link nav-highlighted dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="navbar-toggler-icon"></span> All Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">category-1</a></li>
                  <li><a className="dropdown-item" href="#">category-2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">category-3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Home-1</a></li>
                  <li><a className="dropdown-item" href="#">Home-2</a></li>
                  <li><a className="dropdown-item" href="#">Home-3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shop-1</a></li>
                  <li><a className="dropdown-item" href="#">Shop-2</a></li>
                  <li><a className="dropdown-item" href="#">Shop-3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Pages-1</a></li>
                  <li><a className="dropdown-item" href="#">Pages-2</a></li>
                  <li><a className="dropdown-item" href="#">Pages-3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog-1</a></li>
                  <li><a className="dropdown-item" href="#">Blog-2</a></li>
                  <li><a className="dropdown-item" href="#">Blog-3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <img className="me-1" src="/images/phone-icon.svg" alt="phone" />
          (219) 555-0114
        </nav>
      </div>
    </section>
  );
};