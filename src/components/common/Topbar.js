import React from "react";
import { NavLink } from 'react-router-dom'
export default function Topbar() {
    return (
        <section className="bg-dark text-secondary">
            <div className="container">
                <nav className="navbar py-0 navbar-expand-sm">
                    <span className="navbar-brand py-0 d-flex justify-content-center" href="#">
                        <img src="/images/location-icon.svg" class="img-fluid" alt=" location" />
                        <span className="text-secondary ps-2 font-small">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                    </span>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link text-secondary dropdown-toggle" href="#" id="langToggler" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eng
                            </a>
                            <ul className="dropdown-menu" id="lang-dropdown" aria-labelledby="lang-dropdown">
                                <li><a className="dropdown-item" href="#">ENG</a></li>
                                <li><a className="dropdown-item" href="#">NEP</a></li>
                                <li><a className="dropdown-item" href="#">SPA</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-secondary dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">USD
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                                <li><a className="dropdown-item" href="#">USD</a></li>
                                <li><a className="dropdown-item" href="#">NPR</a></li>
                                <li><a className="dropdown-item" href="#">JPY</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a className="nav-link text-secondary" href="#">Sign Up</a>
                        </li>
                        <span className="navbar-text text-secondary">/</span>
                        <li className="nav-item">
                            <a class="nav-link text-secondary" href="#">Sign In</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );

};