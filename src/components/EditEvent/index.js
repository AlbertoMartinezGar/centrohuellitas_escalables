import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../Header";

const EditEvent = () => {
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);

    const { id } = useParams();

    const getEvent = async () => {
        const respuesta  = await fetch(`http://localhost:3030/api/event/${id}`);
        const evento = await respuesta.json();
        const {nombre, fecha, descripcion, image} = evento;
        setNombre(nombre);
        setFecha(fecha);
        setDescripcion(descripcion);
        setImagen(image);
    }

    useEffect(() => {
        getEvent();
    }, [])

    const handleSubmit = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "_id": id,
                "nombre": nombre,
                "descripcion": descripcion,
                "fecha": fecha,
                "image": imagen
            })
        };

        fetch("http://localhost:3030/api/editevent", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return(
        <>
            <Header />
            <div className="container">
                <div className="row mt-3 mb-3 justify-content-center">
                    <h2 className="primary">Editar un evento</h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre" className="primary">Nuevo nombre del evento:</label>
                        <input type="text" name="nombre" className="form-control" value={nombre && nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha" className="primary">Nueva fecha del evento:</label>
                        <input type="text" name="fecha" className="form-control" value={fecha && fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Nueva descripción del evento:</label>
                        <textarea name="descripcion" className="form-control" value={descripcion && descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Link de imagen de la mascota:</label>
                        <input type="text" name="descripcion" className="form-control" value={imagen}
                            onChange={(e) => setImagen(e.target.value)}
                            required
                        />
                    </div>                   
                    <button type="submit" className="btn btn-primary sticky-button">Editar evento</button>
                </form>
            </div>
            
        </>
    )
}

export default EditEvent;