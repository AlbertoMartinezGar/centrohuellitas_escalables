import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../Header";

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    const url = "http://localhost:3030/api/events";

    const listEvents = async () => {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setEvents(datos);
    }

    useEffect( () => {
        listEvents();
    }, []);

    
    return(
        <>
            <Header/>
            <Link to="/agregarevento" className="btn btn-pimary">Agregar un nuevo evento</Link>
            {
                events && events.map((evento, _index) => (
                    <div key={`event-${_index}`}>
                        <p><b>{evento.nombre}</b></p>
                        <p>{evento.fecha}</p>
                        <p>{evento.descripcion}</p>
                    </div>
                )) 
            }
        </>
        
    )
}

export default EventsPage;