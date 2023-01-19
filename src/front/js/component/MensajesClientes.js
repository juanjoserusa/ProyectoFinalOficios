import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/mensajeCliente.css"
import ModalProfesiones from "./ModalProfesiones";
import { Link } from "react-router-dom";

const MensajesClientes = ({mail, subject, message, id}) => {



    return(
      <div class="col mt-5">
        <Card style={{ width: '18rem' }}>
      <Card.Body className="cardMensaje">
        <Card.Title className="tituloMensaje">Asunto: {subject} </Card.Title>
        <Card.Text className="textoMensaje">
          {message}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Enviado por:{mail} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to={`/single/${id}`} >
          Enviar Mensaje
      </Link>
      </Card.Body>
    </Card>
    </div>

    )
}
export default MensajesClientes