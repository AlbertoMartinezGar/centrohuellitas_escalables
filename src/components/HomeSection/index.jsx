import React from "react";
import { Link } from "react-router-dom";

import "./HomeSection.css";

const HomeSection = ({name = "Eventos", route = "/"}) => {

    return(
        <Link to={route} className="section d-flex align-items-center justify-content-between">
            <p className="section-title">{name}</p>
            <i className="fas fa-arrow-circle-right arrow-icon"></i>
        </Link>
    )
}

export default HomeSection;