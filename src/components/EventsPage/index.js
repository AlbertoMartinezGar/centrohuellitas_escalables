import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../Header";
import EventRowCard from "../EventRowCard"

import "./EventsPage.css";

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
            <Link to="/agregarevento" className="btn btn-pimary sticky-button">Agendar un nuevo evento</Link>
            <div className="container">
                {
                    events && events.map((evento, _index) => (
                        <EventRowCard 
                            key={`event-${_index}`}
                            nombre={evento.nombre}
                            fecha={evento.fecha}
                            descripcion={evento.descripcion}
                            imagen={"http://localhost:3030/"+evento.image}
                        />
                    )) 
                }
            </div>
        </>
        
    )
}

export default EventsPage;