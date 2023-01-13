import React from "react";
import { productos } from "../data/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        productos.forEach((item) => {
            addDoc(itemsCollection, item);
        })

    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const filtrado = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filtrado).then((data) => {
            setLoading(false);
            setListaProductos(data.docs.map((doc) =>
                ({ id: doc.id, ...doc.data() })
            ))
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



