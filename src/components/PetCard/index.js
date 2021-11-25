import React from "react";
import { Link } from "react-router-dom";

const PetCard = ({
    id,
    nombre,
    descripcion,
    edad,
    sexo
}) => {
    
    
    return(
        <div className="col-3 mt-4 mx-4">
            <div className="card">
                <img src="foto2.jpg" className="card-img-top" alt="no foto" />
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <p>{edad}</p>
                <p>{sexo}</p>
                <div className="row justify-content-center mb-2">
                    <div className="btn-group">
                        <Link to="" className="fas fa-edit mr-3 icon-row edit"></Link>
                        <button className="fas fa-trash-alt ml-3 icon-row delete"
                            onClick={(e) => console.log(id)}
                        ></button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default PetCard;