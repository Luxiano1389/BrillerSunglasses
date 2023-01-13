import React, { useEffect, useState } from "react";
import "../css/ItemCount.css";


const ItemCount = ({ inicio, stock, onAdd }) => {

    const [conteo, setConteo] = useState(inicio);
    const [itemStock, setItemStock] = useState(stock);
    const [venta, setVenta] = useState(false);

    const incrementar = () => {
        if (conteo < itemStock) {
            setConteo(conteo + 1);
        }
    }

    const decrementar = () => {
        if (conteo > inicio) {
            setConteo(conteo - 1);
        }
    }

    const agregarAlCarrito = (cantidad) => {
        if (itemStock >= conteo) {
            setConteo(1);
            setItemStock(itemStock - cantidad);
            setVenta(true);
            onAdd(cantidad);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div>
            <div className="d-flex justify-content-start">
                <div className="d-flex align-items-center item-count">
                    <button type="button" onClick={decrementar}>-</button>
                    <h2>{conteo}</h2>
                    <button type="button" onClick={incrementar}>+</button>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-outline-dark btn-agregar" onClick={() => { agregarAlCarrito(conteo) }}>AÑADIR AL CARRITO</button>
            </div>
            {venta ? <p className="mensaje-carrito text-center ">Item agregado con éxito al carrito</p> : ""}
        </div>
    )
}

export default ItemCount;