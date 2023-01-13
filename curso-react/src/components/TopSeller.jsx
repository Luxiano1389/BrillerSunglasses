import React from "react";
import { Link } from "react-router-dom";
import "../css/TopSeller.css";

const TopSeller = () => {

    let titulo = "Top Seller";
    let imagenTopSeller = "imagenes/sol-novedades/top-seller1.webp";
    let nombreTopSeller = "LYON TOSTADO LENTE TOSTADO";
    let precioTopSeller = "$22.000,00";

    return (
        <div className="contenedor-topS">
            <div className="container-fluid text-center">
                <h2 className="titulo">{titulo}</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={imagenTopSeller} className="img-fluid lente-tostado" alt="Lente Tostado" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center contenedor-topSeller">
                        <h2>Briller Eyewear</h2>
                        <h1>{nombreTopSeller}</h1>
                        <p>{precioTopSeller}</p>
                        <hr />
                        <Link to={"/item/LhZo36giD5qnZnYFKDr5"} type="button" className="btn btn-outline-dark btn-detalles" >VER DETALLES</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSeller;
