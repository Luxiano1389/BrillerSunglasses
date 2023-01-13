import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {

    const [listaProductosDetalle, setListaProductosDetalle] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const items = doc(db, "productos", id);
        getDoc(items).then((data) => {
            if (data.exists()) {
                setListaProductosDetalle({ id: data.id, ...data.data() });
                setLoading(false);
            }
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