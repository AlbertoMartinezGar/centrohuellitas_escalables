import React from "react";
import "./EventRowCard.css"

const EventRowCard = ({
    nombre,
    fecha,
    descripcion,
    imagen
}) => {
    return(
        <div className="card mt-3 mb-1">
            <div className="row m-0 p-0">
                <div className="col-4 my-3 d-flex justify-content-center align-items-center">
                    {
                    imagen.includes("undefined")
                        ? (<i class="fas fa-paw paw-icon-row"></i>)
                        : (<img src={imagen} className="imagen-row" alt="img"/>)
                    }
                </div>
                <div className="col-6 my-3">
                    <h5 className="secondary"><b className="primary">Nombre del evento: </b>{nombre}</h5>
                    <p className="secondary"><b className="primary">Fecha del evento: </b>{fecha}</p>
                    <p className="primary"><b>Descripción del evento: </b></p>
                    <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis earum et rem est maiores inventore amet dignissimos quam illo eaque nemo, tenetur nisi! Temporibus ad ex blanditiis facere rem!</p>
                </div>
                <div className="col-2 my-3 d-flex justify-content-end align-items-center">
                    <div className="btn-group mr-2">
                        <button class="fas fa-edit mr-1 icon-row edit"></button>
                        <button class="fas fa-trash-alt ml-1 icon-row delete"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventRowCard;