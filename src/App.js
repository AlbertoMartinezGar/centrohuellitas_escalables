import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import Pets from './components/Pets';
import EventsPage from './components/EventsPage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mascotas" element={<Pets />} />
        <Route path="/eventos" element={<EventsPage />} />        
      </Routes>
     
  );
}

export default App;
