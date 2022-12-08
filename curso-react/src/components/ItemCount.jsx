import React from "react";
import { useState } from "react";
import "../css/ItemCount.css";

const ItemCount = ({ inicio, stock }) => {

    const [conteo, setConteo] = useState(inicio)

    const incrementar = () => {
        if (conteo < stock) {
            setConteo(conteo + 1);
        }
    }

    const decrementar = () => {
        if (conteo > inicio) {
            setConteo(conteo - 1);
        }
    }

    const onAdd = () => {
        if (stock > 0) {
            alert("Agregaste " + conteo + " producto/s")
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-start">
                <div className="d-flex align-items-center item-count">
                    <button type="button" onClick={decrementar}>-</button>
                    <h2>{conteo}</h2>
                    <button type="button" onClick={incrementar}>+</button>
                </div>
                <div className="eliminar d-flex align-items-center">
                    <button type="button">Eliminar</button>
                </div>
            </div>
            <div className="d-flex justify-content-start mt-5">
                <button type="button" className="btn btn-dark btn-caja" onClick={onAdd}>Pasar por caja</button>
            </div>
        </div>
    )
}

export default ItemCount;