import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

import "./InfoContainer.css";

const InfoContainer = ({category = "eventos"}) => {
    let message = "";
    let route = "";
    if(category === "eventos"){
        message = "Estos son los últimos eventos registrados";
        route = "/eventos";
    }
    else if (category === "mascotas") {
        message = "Estas son las últimas mascotas registradas";
        route = "/mascotas"
    }

    return(
        <>
            <div className="row mt-5">
                <h1>{message}</h1>
            </div>
            <div className="row">
                <div className="row mt-3">
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <Link to={route} className="btn btn-primary mt-3">Ver todo</Link>
            </div>
        </>
        
    );

}

export default InfoContainer;