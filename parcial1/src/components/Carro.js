
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Carro(props) {

  return (
    <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
        <div className="containerFilter">
            <div className="carro-item border columna">
                <Link to={"/part/" + props.carro.carModel}  >
                    <img src={props.carro.image} alt={props.carro.carMaker} style={{ width: '250px', height: 'auto'}}/>
                    <h2>{props.carro.carMaker}</h2>
                    <h3>{props.carro.carModel}</h3>
                    <h4>{props.carro.price} {props.carro.carYear}</h4>
                </Link>
            </div>
        </div>
    </Card>
  );
}

export default Carro;
