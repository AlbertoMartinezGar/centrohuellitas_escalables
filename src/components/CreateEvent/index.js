import React, { useState } from "react";
import FileUploader from "../FileUploader";
import Header from "../Header";

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
            <p>Agrega un nuevo evento</p>
            <form onSubmit={handleSubmit}>
                Nombre del evento: 
                    <input type="text" name="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                <br />Fecha del evento: 
                    <input type="text" name="fecha"
                        onChange={(e) => setFecha(e.target.value)}
                    />
                <br />Descripcion del evento: 
                    <textarea name="descripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                <br />Imagen: 
                        <input
                        type="file"
                        name="image"
                        onChange={(event) => {
                            //console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }}
            />
                <br /><br /><button type="submit">Agendar</button>
            </form>
            
        </>
    )
}

export default CreateEvent;