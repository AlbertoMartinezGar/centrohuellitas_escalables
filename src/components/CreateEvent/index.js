import React, { useState } from "react";
import Header from "../Header";

import "./CreateEvent.css";

const CreateEvent = () => {

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);

    //console.log(selectedImage);

    const handleSubmit = () => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nombre": nombre,
                "descripcion": descripcion,
                "fecha": fecha,
                "image": imagen
            })
        };

        fetch("http://localhost:3030/api/addevent", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return(
        <>
            <Header />
            <div className="container">
                <div className="row mt-3 mb-3 justify-content-center">
                    <h2 className="primary">Agenda un nuevo evento</h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre" className="primary">Nombre del evento:</label>
                        <input type="text" name="nombre" className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha" className="primary">Fecha del evento:</label>
                        <input type="text" name="fecha" className="form-control"
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Descripción del evento:</label>
                        <textarea name="descripcion" className="form-control"
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Link de imagen del evento:</label>
                        <input type="text" name="descripcion" className="form-control"
                            onChange={(e) => setImagen(e.target.value)}
                            required
                        />
                    </div>                  
                    <button type="submit" className="btn btn-primary sticky-button">Agendar evento</button>
                </form>
            </div>
            
        </>
    )
}

export default CreateEvent;