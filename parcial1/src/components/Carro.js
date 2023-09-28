
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Carro(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">

           <Card.Body>
               <Card.carMaker>
               <Link to={"/carros/" + props.carro.carModel}  > 
                {props.carro.carMaker}
                </Link>
                </Card.carMaker>
               <Card.Text>
                   {props.carro.carMaker}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Carro;