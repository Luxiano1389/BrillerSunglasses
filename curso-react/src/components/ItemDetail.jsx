import React from "react";
import ItemCount from "./ItemCount";
import "../css/Item.css"

const ItemDetail = ({ listaProductosDetalle }) => {

    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 me-5 contenedor-imagen">
                <img className="img-fluid" src={listaProductosDetalle.imagen} alt={listaProductosDetalle.nombre} />
            </div>
            <div className="col-md-4 detalle-productos mx-5 d-flex flex-column">
                <h1>{listaProductosDetalle.nombre}</h1>
                <span>${listaProductosDetalle.precio}</span>
                <hr />
                <p>{listaProductosDetalle.descripcion}</p>
                <p>{listaProductosDetalle.material}</p>
                <button type="button" className="btn btn-outline-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar al carrito</button>
                <div className="offcanvas offcanvas-end d-flex" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header d-flex align-items-center pt-4 pb-2">
                        <h5 className="offcanvas-title ms-3" id="offcanvasRightLabel">CARRITO</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr />
                    <div className="offcanvas-body d-flex">
                        <div className="imagen-carrito d-flex justify-content-center align-items-start">
                            <img src={listaProductosDetalle.imagen} alt={listaProductosDetalle.nombre} />
                        </div>
                        <div className="d-flex flex-column">
                            <p className="mb-1"><b>{listaProductosDetalle.nombre}</b></p>
                            <p>{listaProductosDetalle.precio}</p>
                            <ItemCount inicio={1} stock={4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;