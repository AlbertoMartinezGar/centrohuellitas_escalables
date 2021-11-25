import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Header from "../Header";

const EditEvent = () => {
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const { id } = useParams();

    const getEvent = async () => {
        const respuesta  = await fetch(`http://localhost:3030/api/event/id=${id}`);
        const evento = await respuesta.json();
        const {nombre, fecha, descripcion, image} = evento;
        setNombre(nombre);
        setFecha(fecha);
        setDescripcion(descripcion);
        if(image){
            if(image.includes("undefined")){
                setSelectedImage(null);
            }
            else{
                setSelectedImage("http://localhost:3030/"+image);
            }
        }
    }

    useEffect(() => {
        getEvent();
    }, [])

    const handleSubmit = () => {
         const urlPut = `http://localhost:3030/api/editevent/id=${id}?nombre=${nombre}&fecha=${fecha}&descripcion=${descripcion}`;
        fetch(urlPut, {method: "PUT"})
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
                    {/* <div className="form-group">
                        <label htmlFor="image" className="primary">Añade una imagen al evento</label>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                {selectedImage ? (
                                    <div> 
                                        <div className="row justify-content-center mb-3">
                                            <img 
                                                alt="not fount" 
                                                width={"250px"} 
                                                src={selectedImage ? 
                                                        selectedImage : 
                                                        URL.createObjectURL(selectedImage)} 
                                            />
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
                    </div> */}                      
                    <button type="submit" className="btn btn-primary sticky-button">Editar evento</button>
                </form>
            </div>
            
        </>
    )
}

export default EditEvent;