import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex flex-column">
            <div className="navbar navbar-expand-lg d-flex justify-content-between">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <Link className="navbar-brand marca" to={"/"}> <b>BRILLER</b> SUNGLASSES</Link>
                </div>
                <CartWidget />
            </div>
            <div className="container-fluid contenedor-nav">
                <div className="collapse navbar-collapse contenedor-enlaces" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link active" aria-current="true" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <NavLink className="nav-link dropdown-toggle active" to={"/"} role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" data-bs-auto-close="true">
                                LENTES DE SOL
                            </NavLink>
                            <ul className="dropdown-menu contenedor-menu">
                                <li><NavLink className="dropdown-item" to={"category/aero"}>Aero</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/new-in"}>New In</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/novedades-en-sol"}>Novedades</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/metal"}>Metal</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/polarizados"}>Polarizados</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/sport"}>Sport</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <NavLink className="nav-link dropdown-toggle active" to={"/"} role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" data-bs-auto-close="true">
                                LENTES DE VISTA
                            </NavLink>
                            <ul className="dropdown-menu contenedor-menu">
                                <li><NavLink className="dropdown-item" to={"category/novedades-en-vista"}>Novedades</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/readers"}>Readers</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="linea"></div>
        </nav>

    )
}

export default Navbar;