import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/mensajeCliente.css"
import ModalProfesiones from "./ModalProfesiones";

const MensajesClientes = () => {


    return(
      <div class="col mt-5">
        <Card style={{ width: '18rem' }}>
      <Card.Body className="cardMensaje">
        <Card.Title className="tituloMensaje">Mensajes</Card.Title>
        <Card.Text className="textoMensaje">
          Este es un mensaje de prueba
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Enviado por:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Leer</Card.Link>
        <Card.Link href="#"><ModalProfesiones /></Card.Link>
      </Card.Body>
    </Card>
    </div>

    )
}
export default MensajesClientes