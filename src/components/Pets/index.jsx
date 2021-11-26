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

    const deletePet = async (_evento, id) => {
        console.log("Borrando al id - " + id);
        const respuesta = await fetch("http://localhost:3030/api/deletepet/" + id, {method: "DELETE"});
        if(respuesta){
            listPets();
        }
    }

    useEffect(() => {
        listPets();
    }, [])

    return(
        <>
            <Header/>
            <Link to="/agregarmascota" className="btn btn-pimary sticky-button">Agregar una nueva mascota</Link>
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
                            image={"http://localhost:3030/"+pet.image}
                            deletePet={deletePet}
                        />
                        
                     ))
                }
                </div>
            </div>
        </>
        
    )
}

export default Pets;