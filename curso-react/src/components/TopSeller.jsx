import React from "react";
import "../css/TopSeller.css"

const TopSeller = () => {

    let titulo = "Top Seller";
    let imagenTopSeller = "imagenes/top-seller.webp";
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
                        <button type="button" class="btn btn-outline-dark">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSeller;
