import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PetCard from "../PetCard";
import "./Pets.css";

const Pets = () => {
    const [pets, setPets] = useState([]);

    const url = "http://localhost:3030/api/pets"

    const listPets = async () => {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setPets(datos);
    }

    useEffect(() => {
        listPets();
    }, [])

    return(
        <>
            <Header/>
            <Link to="/agregarevento" className="btn btn-pimary sticky-button">Agregar una nueva mascota</Link>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                {
                    pets && pets.map((pet, _index) => (
                        
                        <PetCard
                            key={`pet-${_index}`}
                            id={pet._id}
                            nombre={pet.nombre}
                            descripcion={pet.descripcion}
                            edad={pet.edad}
                            sexo={pet.sexo}
                        />
                        
                     ))
                }
                </div>
            </div>
        </>
        
    )
}

export default Pets;