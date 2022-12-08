import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex flex-column">
            <div className="navbar navbar-expand-lg d-flex">
                <div className="d-flex flex-column">
                    <Link className="navbar-brand marca" to={"/"}>BRILLER</Link>
                    <p className="navbar-brand submarca">sunglasses</p>
                </div>
                <CartWidget />
            </div>
            <div className="container-fluid contenedor-nav">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse contenedor-enlaces" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link active" aria-current="true" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <NavLink className="nav-link dropdown-toggle active" to={"/"} role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" data-bs-auto-close="true">
                                LENTES DE SOL
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"category/novedades"}>Novedades</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/metal"}>Metal</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/polarizados"}>Polarizados</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"category/sport"}>Sport</NavLink></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><NavLink className="dropdown-item" to={"/category/"}>Todos</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;