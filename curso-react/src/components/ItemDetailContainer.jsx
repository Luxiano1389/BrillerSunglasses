import React from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
import { productos } from "../data/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [listaProductosDetalle, setListaProductosDetalle] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promesas = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos.find(listaProductosDetalle => listaProductosDetalle.id === id))
            }, 2000);
        });

        promesas.then((data) => {
            setLoading(false)
            setListaProductosDetalle(data)
        })
    }, [id]);

    return (
        <div className="container item-detail-container">
            {
                loading ? <Spinner /> :
                    <ItemDetail listaProductosDetalle={listaProductosDetalle} />
            }
        </div>
    )
}

export default ItemDetailContainer;