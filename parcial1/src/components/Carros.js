import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carro from "./Carro";
import CarroDetail from "./CarroDetail";

function Carros(props){
    const location = useLocation();
    const [carros, setCarro] = useState([]);

    const renderrating = () => {
        console.log("entrando funcion")
        if ( props.usuario !== undefined) return (console.log(props.usuario), "Role: " +props.usuario.role);
        else return ("hola");
      };

      useEffect(() => {
        // const URL ="https://my.api.mockaroo.com/books.json?key=57ab8190";
        const URL ="https://isis3710.slack.com/files/U04G1K8C3U3/F05U55ZLV70/datos.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setCarro(data);
        }); 
    }, []);

    return(
        <div className="container">
        <Row>
            <h1>Carros</h1>
            <h1>{renderrating()}</h1>
            <h2>datos</h2>
        </Row>

        </div>
                
    )

   
}

export default Carros;