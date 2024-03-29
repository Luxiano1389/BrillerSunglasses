import React from "react";
import "../css/VideoBanner.css"

const VideoBanner = () => {

    let videoBanner = "videos/video.mp4";

    return (
        <div className="d-flex justify-content-center">
            <video controls loop muted autoPlay>
                <source src={videoBanner} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoBanner;