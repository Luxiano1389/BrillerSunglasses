import React from "react";
import { Link } from "react-router-dom";
import "../css/Item.css"

const Item = ({ producto }) => {

    const { imagen, nombre, precio } = producto

    return (
        <div className="col-md-4 mb-3 d-flex justify-content-center">
            <Link to={"/item/" + producto.id} className="text-decoration-none text-reset" >
                <div className="card border border-0">
                    <img src={imagen} className="card-img-top" alt={nombre} />
                    <div className="card-body">
                        <p className="card-text"><b>{nombre}</b></p>
                        <p className="card-text">${precio}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;