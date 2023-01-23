import React, { useContext, useState }  from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/mensajeCliente.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
      <div className="col mt-5 ">
        <Card  className="cardMensaje">
      <Card.Body className="cardMensaje">
        <Card.Title className="tituloMensaje">Asunto: {subject} </Card.Title>
        <Card.Text className="textoMensaje">
          {message}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Enviado por: {sender} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
       <Button href={`mailto:${sender}`}>Responder</Button>
      </Card.Body> 
    </Card>
    
    </div>

    )
}
export default MensajesClientes