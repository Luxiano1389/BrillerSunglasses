import React from "react";
import "../css/Navbar.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="anuncios">
            {greeting}
        </div>
    )
}

export default ItemListContainer;