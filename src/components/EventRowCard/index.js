import React from "react";
import { Link } from "react-router-dom";
import "./EventRowCard.css"

const EventRowCard = ({
    id,
    nombre,
    fecha,
    descripcion,
    image,
    deleteEvent
}) => {
    return(
        <div className="card mt-3 mb-1">
            <div className="row m-0 p-0">
                <div className="col-4 my-3 d-flex justify-content-center align-items-center">
                    {
                    image.includes("undefined")
                        ? (<i className="fas fa-paw paw-icon-row"></i>)
                        : (<img src={image} className="imagen-row" alt="img"/>)
                    }
                </div>
                <div className="col-6 my-3">
                    <h5 className="secondary"><b className="primary">Nombre del evento: </b>{nombre}</h5>
                    <p className="secondary"><b className="primary">Fecha del evento: </b>{fecha}</p>
                    <p className="primary"><b>Descripción del evento: </b></p>
                    <p className="secondary">{descripcion}</p>
                </div>
                <div className="col-2 my-3 d-flex justify-content-end align-items-center">
                    <div className="btn-group mr-2">
                        <Link to={`/editarevento/${id}`} className="fas fa-edit mr-1 icon-row edit"></Link>
                        <button className="fas fa-trash-alt ml-1 icon-row delete"
                            onClick={(e) => deleteEvent(e, id)}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventRowCard;