import React from "react";
import "../css/ProductosBanner.css"

const ProductosBanner = () => {

    let imagenIzquierda = "imagenes/lentes-ver.jpg";
    let imagenDerecha = "imagenes/lentes-sol.jpg";
    let categoriaVista = "Lentes de Vista";
    let categoriaSol = "Lentes de Sol";
    
    return (
        <div className="container-fluid contenedor-banner">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-evenly ">
                    <img src={imagenIzquierda} className="img-fluid lentes-vista" alt="Lentes de Vista" />
                    <p className="lentes-vista1">{categoriaVista}</p>
                </div>
                <div className="col-md-6 d-flex justify-content-evenly">
                    <img src={imagenDerecha} className="img-fluid lentes-sol" alt="Lentes de Sol" />
                    <p className="lentes-sol1">{categoriaSol}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductosBanner;