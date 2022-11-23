import React from "react";
import "../css/Footer.css"

const Footer = () => {

    return (
        <div className="container-fluid contenedor-footer">
            <div className="row">
                <div className="col-md-6 contenedor-marca">
                    <h3 className="nombre-marca1">Briller</h3>
                    <span className="submarca1">sunglasses</span>
                </div>
                <div className="col-md-6 contenedor-links1 d-flex justify-content-end">
                    <a href="">Home</a>
                    <a href="">LENTES DE VISTA</a>
                    <a href="">LENTES DE SOL</a>
                </div>
            </div>
            <div className="col">
                <p className="texto-footer">En <b>BRILLER</b> nos dedicamos hace 10 años al diseño de gafas por excelencia, innovando con curiosidad permanente, construyendo nuestra propia personalidad.</p>
            </div>
        </div>
    )
}

export default Footer;