import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../css/Item.css"

const ItemDetail = ({ listaProductosDetalle }) => {

    const { addItem } = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (cantidad) => {
        setItemStock(itemStock - cantidad);
        addItem(listaProductosDetalle, cantidad);
    }

    useEffect(() => {
        setItemStock(listaProductosDetalle.stock);
    }, [listaProductosDetalle])

    return (
        <div className="row d-flex justify-content-center align-items-center contenedor-item-detail">
            <div className="col-md-1"></div>
            <div className="col-md-4 me-5 contenedor-imagen">
                <img className="img-fluid" src={listaProductosDetalle.imagen} alt={listaProductosDetalle.nombre} />
            </div>
            <div className="col-md-4 detalle-productos mx-5 d-flex flex-column justify-content-center">
                <h1>{listaProductosDetalle.nombre}</h1>
                <span>${listaProductosDetalle.precio}.000</span>
                <hr />
                <p>{listaProductosDetalle.descripcion}</p>
                <p>{listaProductosDetalle.material}</p>
                <p>{listaProductosDetalle.material1}</p>
                <p>{listaProductosDetalle.material2}</p>
                <ItemCount inicio={1} stock={5} onAdd={onAdd} />
                <div className="contenedor-btn-caja">
                    <Link to={"/cart"} className="btn btn-dark btn-caja">PASAR POR CAJA</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;