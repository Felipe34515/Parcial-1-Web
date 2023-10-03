import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Carros from './components/Carros';
import CarroDetail from './components/CarroDetail';
import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import { useTranslation, i18n } from 'react-i18next';



function App() {
  const [datos, setDatos] = useState();
  const [usuario, setUsuario] = useState("{}");
  const [t, i18n] = useTranslation("es");
  return (
    <div className='App'>
      <LanguageSelector></LanguageSelector>
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
