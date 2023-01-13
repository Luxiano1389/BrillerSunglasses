import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div className="mt-5">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <Link to={"/category/new-in"}><img src="imagenes/carousel/new-in.webp" className="d-block w-100" alt="New In" /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link to={"/category/aero"}><img src="imagenes/carousel/aero.webp" className="d-block w-100" alt="Estilo Aero" /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="imagenes/carousel/sunglasses.webp" className="d-block w-100" alt="Sunglasses Briller" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;