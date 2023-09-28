import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email:"", password:"",role:true})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})
  const [dataPOST, setDataPOST] = useState("{}")

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  if (e.target.value.length < 6 ) {
    setValidationStates({...validationStates, passwordState:false})
  }else{
    setValidationStates({...validationStates, passwordState:true})
  }
  });

  
 

  const clickSubmit = (() => {
    //validate email
    if (formValues.email.includes("@") && validationStates.passwordState) {
      setValidationStates({ ...validationStates, emailState: true });
      handlePost();
      
    } else if (!formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: false });
    } else if (!validationStates.passwordState) {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    })

    const exampleJSON = { email: formValues.email, password: formValues.password, role: formValues.role}

    async function handlePost() {
      console.log("Recogiendo Data")
      //console.log("https://my.api.mockaroo.com/login.json?key=7f26da30&__method=POST+"+"&id="+3)
      
      const response = await fetch("https://isis3710.slack.com/files/U04G1K8C3U3/F05U55ZLV70/datos.json", { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      const dataa = await response.json()
      setDataPOST(JSON.stringify(dataa))
      props.setUsuario(dataa)
      navigate("/carros" , {state: {value: (dataa)}})
    };

  
  return (
    <Container>
    <Row>

        <Col style={{backgroundColor: 'white'}}>
            <h1>Acceder</h1>
            <h2>Usa tu cuenta UniAlpes</h2>
            <Form>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''}/>
                    {!validationStates.emailState &&  <Form.Text className='text-muted'>Your email is invalid</Form.Text>}
                    {validationStates.emailState &&  <Form.Text className='text-muted'>We'll never share your email with anyoneelse.</Form.Text>}
                 </Form.Group>
                
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''}/>
                    { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 6 char long</Form.Text>} 
                </Form.Group>

                <Button variant="primary" onClick={clickSubmit} className="w-25 btn-secondary rounded-pille"  >
                    Sign In
                </Button>

            </Form>
        </Col>
    </Row>
    </Container>
  );
}

export default Login;