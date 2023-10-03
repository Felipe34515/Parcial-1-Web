import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation, i18n } from 'react-i18next';

function CarroDetail(props){
  const [t, i18n] = useTranslation("es");
    const params = useParams();
    
    const [carros, setCarros] = useState([]);
    useEffect(() => {
        const URL ="https://raw.githubusercontent.com/Felipe34515/Parcial-1-Web/main/datos.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setCarros(data);
        }); 
    }, []);
   
    const especial = carros.find(carro => carro.carModel === params.carrosid);


    console.log( especial)
    return (
          <div style={{ width: '1100px', height: 'auto', padding: '10px', margin: '10%', border: '1px solid black' }} className='mb-3'>
            <div className='containerFilter'>
              {especial ? (
                <div className='columna'>
                  <img src={especial.image} style={{ width: '500px', height: 'auto' }} alt='Car' />
                </div>
              ) : null}
              <div className='columna'>
                {especial ? (
                  <div>
                    <h3>{especial.carModel}</h3>
                    <hr></hr>
                    <h4 > {t('CarMaker')} : {especial.carMaker}</h4>
                    <h4> {t('CarModel')} : {especial.carModel}</h4>
                    <h4> {t('CarYear')} : {especial.carYear}</h4>
                    <h4> {t('PartName')} : {especial.partName}</h4>
                    <h4> {t('Description')} : </h4>
                    <p> {especial.description}</p>
                  </div>
                ) : (
                  <p>{t('CarNotFound')}</p>
                )}
              </div>
          </div>
        </div>
      );
      
}

export default CarroDetail;