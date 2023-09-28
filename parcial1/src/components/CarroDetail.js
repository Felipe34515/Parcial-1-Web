import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CarroDetail(props){
    const params = useParams();
    console.log(params.carroId)
    const [carros, setCarro] = useState([]);

   
   console.log(carros)
   const especial = carros.find((carro) => carro.isbn === (params.carroId)) || {};

    return(
        <div>
        <h1>Detalle de los carros</h1>
        <col>
            <p>Modelo del carro: {especial.image}</p>
        </col>
        <col>
            <p>Modelo del carro: {especial.carModel}</p>
            <p>anio del carro: {especial.carYear}</p>
            <p>partName del carro: {especial.partName}</p>
            <p>precio del carro: {especial.price}</p>
            <p>{especial.description}</p>
        </col>

        </div>
    )
}

export default CarroDetail;