import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../Header";

const EditPet = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [imagen, setImagen] = useState(null);

    const { id } = useParams();

    const getPet = async () => {
        const respuesta  = await fetch(`http://localhost:3030/api/pet/${id}`);
        const mascota = await respuesta.json();
        const {nombre, descripcion, edad, sexo, image} = mascota;
        setNombre(nombre);
        setDescripcion(descripcion);
        setEdad(edad);
        setSexo(sexo);
        setImagen(image);
    }

    useEffect(() => {
        getPet();
    }, [])

    const handleSubmit = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "_id": id,
                "nombre": nombre,
                "descripcion": descripcion,
                "edad": edad,
                "sexo": sexo,
                "image": imagen
            })
        };

        fetch("http://localhost:3030/api/editpet", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    
 

    return(
        <>
            <Header />
            <div className="container">
                <div className="row mt-3 mb-3 justify-content-center">
                    <h2 className="primary">Agenda una nueva mascota</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre" className="primary">Nombre de la mascota:</label>
                        <input type="text" name="nombre" className="form-control"  value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Descripción de la mascota:</label>
                        <textarea name="descripcion" className="form-control"  value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="edad" className="primary col-text">Edad de la mascota:</label>
                                <input type="text" name="edad" className="form-control"  value={edad}
                                    onChange={(e) => setEdad(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="sexo" className="primary col-text">Sexo de la mascota:</label>
                                <select 
                                    className="form-control" 
                                    name="fecha"  
                                    onChange={(e) => setSexo(e.target.value)}
                                    required
                                >
                                    <option>Escoge el sexo...</option>
                                    <option value="Macho">Macho</option>
                                    <option value="Hembra">Hembra</option>
                                </select>
                                   
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Link de imagen de la mascota:</label>
                        <input type="text" name="descripcion" className="form-control" value={imagen}
                            onChange={(e) => setImagen(e.target.value)}
                            required
                        />
                    </div>                  
                    <button type="submit" className="btn btn-primary sticky-button">Editar la mascota</button>
                </form>
            </div>
            
        </>
    )
}

export default EditPet;