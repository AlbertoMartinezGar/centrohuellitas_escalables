import React from "react";
import Card from "../Card";

import "./InfoContainer.css";

const InfoContainer = ({category = "eventos"}) => {
    let message = "";
    if(category === "eventos"){
        message = "Estos son los ultimos eventos registrados";
    }
    else if (category === "mascotas") {
        message = "Estas son las ultimas mascotas registradas";
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
                <button className="btn btn-primary mt-3">Ver todo</button>
            </div>
        </>
        
    );

}

export default InfoContainer;