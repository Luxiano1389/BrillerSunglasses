import React from "react";
import VideoBanner from "./VideoBanner";
import TopSeller from "./TopSeller";
import Carousel from "./Caroulsel";

const Home = () => {
    return (
        <div className="contenedor-home">
            <VideoBanner />
            <Carousel />
            <TopSeller />
        </div>
    )
}

export default Home;