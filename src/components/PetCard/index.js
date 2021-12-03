import React from "react";
import { Link } from "react-router-dom";

import "./PetCard.css";

const PetCard = ({
    id,
    nombre,
    descripcion,
    edad,
    sexo,
    image,
    deletePet
}) => {
    console.log(image);
    return(
        <div className="col-3 mt-4 mx-4">
            <div className="card h-100">
                {
                    image.includes("undefined")
                        ? (<img src="foto2.jpg" className="card-img-top" alt="no foto" />)
                        : (<img src={image} className="card-img-top" alt="img"/>)
                }
                
                <h3 className="primary mt-2 ml-2">{nombre}</h3>
                <p className="secondary ml-2">{descripcion}</p>
                <p className="primary ml-2"><b>Edad: {edad}</b></p>
                <p className="primary ml-2"><b>Sexo: {sexo}</b></p>
                <div className="row h-100 m-0 p-0 justify-content-center align-items-end mb-2">
                    <div className="btn-group">
                        <Link to={`/editarmascota/${id}`} className="fas fa-edit mr-3 icon-row edit"></Link>
                        <button className="fas fa-trash-alt ml-3 icon-row delete"
                            onClick={(e) => deletePet(e, id)}
                        ></button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default PetCard;