import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";

import "../../styles/mensajeCliente.css";
import Button from "react-bootstrap/Button";

import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import swal from "sweetalert";


const MensajesClientes = ({ sender, subject, message, from }) => {
  const { store, actions } = useContext(Context);



  const token = store.token;
  const email = store.email;
  const id = store.id;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const seleccionado = (e) => {
    e.target.className = "cardMensaje2";
  };





  return (
    <div className="col mt-5  ms-3">
      <Card className="cardMensaje" >
        <Card.Body className="cardMensaje">
        <button
            onClick={(e) => {
              seleccionado(e);
            }}
          >
            Leido
          </button>
          <Card.Title className="tituloMensaje">{subject} </Card.Title>
          <Card.Text className="textoMensaje">{message}</Card.Text>
        </Card.Body>
        <Card.Body className="cardMensajeMail">
          <Button href={`mailto:${sender}`} className="submitBtn3" onClick={() => {swal("Gracias!", `Se te ha enviado a una página externa a enviar un mensaje a ${sender}`, "success")}}>
            Responder
          </Button>

        </Card.Body>
      </Card>
    </div>
  );
};
export default MensajesClientes;
