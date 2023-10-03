import '../App.css';
import Carro from "./Carro";

const { useEffect, useState } = require("react");

function Carros() {
    const [carros, setCarros] = useState([]);
    useEffect(() => {
        const URL ="https://raw.githubusercontent.com/Felipe34515/Parcial-1-Web/main/datos.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setCarros(data);
        }); 
    }, []);

    return (
        <div>
            <h1>List of cars</h1>
            <hr></hr>
            <center>
                <div className='containerFilter' style={{ width: "1000px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {carros.map(carro =>
                        <div className="columna" key={carro.carModel} style={{ margin: "20px", width: "calc(33.33% - 40px)", border: "1px solid black" }}>
                            <Carro carro={carro} />
                        </div>
                    )}
                </div>
            </center>
        </div>
    )
}

export default Carros;


