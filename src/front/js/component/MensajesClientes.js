import React, { useContext, useState }  from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/mensajeCliente.css"
import Button from 'react-bootstrap/Button';


import { Link } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

const MensajesClientes = ({sender, subject, message, from}) => {

  const { store, actions } = useContext(Context);

  const token = store.token;
  const email = store.email;
  const id = store.id

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



    return(
      <div className="col mt-5  ms-3">
        <Card  className="cardMensaje">
      <Card.Body className="cardMensaje">
        <Card.Title className="tituloMensaje">{subject} </Card.Title>
        <Card.Text className="textoMensaje">
          {message}
        </Card.Text>
      </Card.Body>
      <Card.Body className="cardMensajeMail">
      
       <Button href={`mailto:${sender}`} className="submitBtn3">Responder</Button>
      </Card.Body> 
    </Card>
    
    </div>

    )
}
export default MensajesClientes