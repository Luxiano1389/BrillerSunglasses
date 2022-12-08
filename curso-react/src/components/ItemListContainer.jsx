import React from "react";
import { productos } from "../data/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesas = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? productos.filter(producto => producto.categoria === id) : productos)
            }, 2000);
        });

        promesas.then((data) => {
            setLoading(false);
            setListaProductos(data)
        })
    }, [id]);

    return (
        <div className="container item-list-container">
            {
                loading ?
                    <Spinner />
                    :
                    <ItemList listaProductos={listaProductos} />       
            }
        </div>
    )
}

export default ItemListContainer;



