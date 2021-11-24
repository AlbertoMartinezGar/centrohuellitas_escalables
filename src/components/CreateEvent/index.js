import React, { useState } from "react";
import FileUploader from "../FileUploader";
import Header from "../Header";

const CreateEvent = () => {

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    console.log(selectedFile);

    const handleSubmit = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "nombre": nombre,
            "fecha": fecha,
            "descripcion": descripcion
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3030/api/newevent", requestOptions)
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
                        <FileUploader setSelectedFile={setSelectedFile}/>
                <br /><br /><button type="submit">Agendar</button>
            </form>
            
        </>
    )
}

export default CreateEvent;