import React, { useContext }  from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/mensajeCliente.css"
import ModalProfesiones from "./ModalProfesiones";
import { Link } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

const MensajesClientes = ({sender, subject, message, id}) => {

  const { store, actions } = useContext(Context);

  const token = store.token;
  const email = store.email;
  const id2 = store.id



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
        <ListGroup.Item>Enviado por: {sender} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to={"/single/"+sender}>
          Aceptar Trabajo
      </Link>
      </Card.Body>
    </Card>
    
    </div>

    )
}
export default MensajesClientes