import React from "react";
import VideoBanner from "./VideoBanner";
import TopSeller from "./TopSeller";

const Home = () => {
    return (
        <div className="contenedor-home">
            <VideoBanner />
            <TopSeller />
        </div>
    )
}

export default Home;