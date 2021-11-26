import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import Pets from './components/Pets';
import EventsPage from './components/EventsPage';
import CreateEvent from './components/CreateEvent';
import EditEvent from './components/EditEvent';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import './App.css';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mascotas" element={<Pets />} />
        <Route path="/eventos" element={<EventsPage />} />  
        <Route path="/agregarevento" element={<CreateEvent />} /> 
        <Route path="/editarevento/:id" element={<EditEvent />} />
        <Route path="/agregarmascota" element={<CreatePet />} />
        <Route path="/editarmascota/:id" element={<EditPet />} />
      </Routes>
     
  );
}

export default App;
