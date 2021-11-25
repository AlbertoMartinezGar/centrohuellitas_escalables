import React, { useState } from "react";
import Header from "../Header";

import "./CreateEvent.css";

const CreateEvent = () => {

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    //console.log(selectedImage);

    const handleSubmit = () => {
        let TempPath = URL.createObjectURL(selectedImage);
        var formdata = new FormData();
        formdata.append("nombre", nombre);
        formdata.append("fecha", fecha);
        formdata.append("descripcion", descripcion);
        formdata.append("image", selectedImage, TempPath+".jpg");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
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
                        <label for="nombre" className="primary">Nombre del evento:</label>
                        <input type="text" name="nombre" className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="fecha" className="primary">Fecha del evento:</label>
                        <input type="text" name="fecha" className="form-control"
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="descripcion" className="primary">Descripción del evento:</label>
                        <textarea name="descripcion" class="form-control"
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="image" className="primary">Añade una imagen al evento</label>
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
                    </div>                      
                    <button type="submit" className="btn btn-primary sticky-button">Agendar evento</button>
                </form>
            </div>
            
        </>
    )
}

export default CreateEvent;