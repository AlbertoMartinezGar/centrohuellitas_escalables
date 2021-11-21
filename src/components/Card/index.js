import React from "react";

import "./Card.css"

const Card = () => {
    return(
        <div className="card">
            <img className="card-img-top" src="https://www.snau.es/blog/wp-content/uploads/2018/10/fiesta_perros.jpg" alt="hola"></img>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Card;