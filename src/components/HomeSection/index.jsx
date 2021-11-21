import React from "react";

import "./HomeSection.css";

const HomeSection = ({name = "Eventos"}) => {

    return(
        <a href="/" className="section d-flex align-items-center justify-content-between">
            <p className="section-title">{name}</p>
            <i class="fas fa-arrow-circle-right arrow-icon"></i>
        </a>
    )
}

export default HomeSection;