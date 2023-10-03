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
    <div className='App'>
      <BrowserRouter>
        <Routes> 
        <Route path='/' element={<Login/>}></Route>
          <Route path='/parts' element={<Carros/>}></Route>
          <Route path='/part' element={<CarroDetail/>}></Route>
          <Route path='/part/:carrosid' element={<CarroDetail/>}></Route>

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
