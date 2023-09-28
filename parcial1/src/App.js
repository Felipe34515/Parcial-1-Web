import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Carros from './components/Carros';
import CarroDetail from './components/CarroDetail';
import { useState } from 'react';

function App() {
  const [datos, setDatos] = useState();
  const [usuario, setUsuario] = useState("{}");
  return (
    <div className='App' style={{backgroundColor:'grey', width:'100%', height:'100%', minHeight:'100vh', margin:'auto'}}>
      <BrowserRouter>
      <h1>hola</h1>
        <Routes> 
          <Route path="/" element={<Login usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/Carros" element={<Carros datos={datos} setDatos={setDatos} usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/Carros/:CarroId" element={<CarroDetail datos={datos} setDatos={setDatos} usuario={usuario} setUsuario={setUsuario} />} /> 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
