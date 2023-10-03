import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CarroDetail(props){
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
        <div style={{ width: '1100px', height: 'auto', padding: "10px", margin: "10%", border: "1px solid black" }} className="mb-3">
          <div className="containerFilter">
            {especial ? (
              <div className="columna">
                <img src={especial.image} style={{ width: '500px', height: 'auto' }}></img>
              </div>
            ) : null}
            <div className="columna">
              {especial ? (
                <div>
                  <h3>{especial.carModel}</h3>
                  <hr></hr>
                  <h4 > CarMaker : {especial.carMaker}</h4>
                  <h4> Car Model : {especial.carModel}</h4>
                  <h4> Car Year : {especial.carYear}</h4>
                  <h4> Part Name : {especial.partName}</h4>
                  <h4> Description : </h4>
                  <text> {especial.description}</text>
                </div>
              ) : (
                <p>Carro no encontrado</p>
              )}
            </div>
          </div>
        </div>
      );
      
}

export default CarroDetail;