import React from "react";
import "../css/Navbar.css"

const BannerAnuncios = ({greeting}) => {
    return (
        <div className="anuncios">
            {greeting}
        </div>
    )
}

export default BannerAnuncios;