import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/images/tdp-02.webp";

export default function NavBar() {
    const handleClick = () => {
        const nav = document.getElementById("navbarNav");
        if (nav.classList.contains("show")) {
            new window.bootstrap.Collapse(nav).hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3 sticky-top">
            <div className="container">

                {/* logo */}
                <NavLink className="navbar-brand logo text-white fw-bold" to="/" onClick={handleClick}>
                    <img src={logo} alt={logo.png} className="logo" />
                </NavLink>

                {/* toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-lg-auto gap-4">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={handleClick}>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About" onClick={handleClick}>About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Services" onClick={handleClick}>Services</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Product" onClick={handleClick}>Product</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Our-Work" onClick={handleClick}>Our Work</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Pricing" onClick={handleClick}>Pricing</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact" onClick={handleClick}>Contact</NavLink>
                        </li>

                        {/* Button */}
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className="btn btn-primary get-a-quote px-4 py-2 d-flex align-items-center gap-2 text-dark"
                                onClick={handleClick}
                            >
                                Get a Quote
                                <i className="bi bi-arrow-right"></i>
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}