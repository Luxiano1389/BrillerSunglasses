import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../css/TopSeller.css";


const TopSeller = () => {

    let titulo = "Top Seller";
    let imagenTopSeller = "imagenes/sol-novedades/top-seller.webp";
    let nombreTopSeller = "LYON TOSTADO LENTE TOSTADO";
    let precioTopSeller = "$22.800,00";

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
                        <button type="button" className="btn btn-outline-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar al carrito</button>
                        <Link className="detalles-producto" to={"/item/24"}>ver los detalles del producto</Link>
                        <div className="offcanvas offcanvas-end d-flex" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header d-flex align-items-center pt-4 pb-2">
                                <h5 className="offcanvas-title ms-3" id="offcanvasRightLabel">CARRITO</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <hr />
                            <div className="offcanvas-body d-flex">
                                <div className="imagen-carrito d-flex justify-content-center align-items-start">
                                    <img src={imagenTopSeller} alt="Lente Tostado" />
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="mb-1"><b>{nombreTopSeller}</b></p>
                                    <p>{precioTopSeller}</p>
                                    <ItemCount inicio={1} stock={4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSeller;
