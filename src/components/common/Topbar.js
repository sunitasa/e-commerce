import React from "react";
import { NavLink } from 'react-router-dom'
export default function Topbar() {
    return (
        <section className="bg-dark text-secondary font-small">
            <div className="container">
                <nav className="navbar py-0 navbar-expand-sm">
                    <span className="py-0 d-flex justify-content-center" href="#">
                        <img src="/images/location-icon.svg" className="img-fluid" alt=" location" />
                        <span className="text-secondary ps-2">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                    </span>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-secondary dropdown-toggle" href="#" id="langToggler" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eng
                            </a>
                            <ul className="dropdown-menu font-small" id="lang-dropdown" aria-labelledby="lang-dropdown">
                                <li><a className="dropdown-item" href="#">ENG</a></li>
                                <li><a className="dropdown-item" href="#">NEP</a></li>
                                <li><a className="dropdown-item" href="#">SPA</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-secondary dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">USD
                            </a>
                            <ul className="dropdown-menu font-small" aria-labelledby="currencyDropdown">
                                <li><a className="dropdown-item" href="#">USD</a></li>
                                <li><a className="dropdown-item" href="#">NPR</a></li>
                                <li><a className="dropdown-item" href="#">JPY</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Sign Up</a>
                        </li>
                        <span className="navbar-text text-secondary">/</span>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Sign In</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );

};