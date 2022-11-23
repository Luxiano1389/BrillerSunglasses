import React from "react";
import CartWidget from "./CartWidget";
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light d-flex flex-column">
            <div className="navbar navbar-expand-lg">
                <div className="d-flex flex-column">
                    <a className="navbar-brand marca" href="#">BRILLER</a>
                    <p className="navbar-brand submarca">sunglasses</p>
                </div>
                <CartWidget></CartWidget>
            </div>
            <div className="container-fluid contenedor-nav">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse contenedor-enlaces" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                LENTES DE VISTA
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Novedades</a></li>
                                <li><a className="dropdown-item" href="#">Metal</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Todos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                LENTES DE SOL
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Novedades</a></li>
                                <li><a className="dropdown-item" href="#">Metal</a></li>
                                <li><a className="dropdown-item" href="#">Polarizados</a></li>
                                <li><a className="dropdown-item" href="#">Sport</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Todos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;