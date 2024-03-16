import React from "react";
import { NavLink } from 'react-router-dom'
export default function Topbar() {
    return (

        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <img src="./location-icon.svg" class="img-fluid" alt=" location" />
                <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eng
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">USD
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                        <li classN="nav-item">
                            <a class="nav-link" href="#">/Sign In</a>
                        </li>
                    </ul>
                </li>
            </nav>
        </div>
    );

};