import React, { useState } from "react";
import Header from "../Header";

import "./CreatePet.css";

const CreatePet = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [imagen, setImagen] = useState(null);

    const handleSubmit = (e) => {        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nombre": nombre,
                "descripcion": descripcion,
                "edad": edad,
                "sexo": sexo,
                "image": imagen
            })
        };

        fetch("http://localhost:3030/api/addpet", requestOptions)
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
                        <input type="text" name="nombre" className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="primary">Descripción de la mascota:</label>
                        <textarea name="descripcion" className="form-control"
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="edad" className="primary col-text">Edad de la mascota:</label>
                                <input type="text" name="edad" className="form-control"
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
                        <input type="text" name="descripcion" className="form-control"
                            onChange={(e) => setImagen(e.target.value)}
                            required
                        />
                    </div>
                    
                    {/* <div className="form-group">
                        <label htmlFor="image" className="primary">Añade una imagen de la mascota</label>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                {selectedImage ? (
                                    <div> 
                                        <div className="row justify-content-center mb-3">
                                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                        </div>
                                        <div className="row justify-content-center">
                                            <button 
                                                onClick={()=>setSelectedImage(null)} 
                                                className="btn btn-primary"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ) : <h2>Preview de la imagen</h2>}
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(event) => {
                                        setSelectedImage(event.target.files[0]);
                                    }}
                                />
                            </div>
                        </div>
                    </div>              */}         
                    <button type="submit" className="btn btn-primary sticky-button">Agregar mascota</button>
                </form>
            </div>
            
        </>
    )
}

export default CreatePet;