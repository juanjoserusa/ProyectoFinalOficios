import React, { useContext, useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBTextArea,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCheckbox,
  MDBCol
  
} from 'mdb-react-ui-kit';
import Card from "react-bootstrap/Card";

import "../../styles/mensajeCliente.css";
import Button from "react-bootstrap/Button";

import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import swal from "sweetalert";


const MensajesClientes = ({ sender, subject, message, from, to }) => {
  const { store, actions } = useContext(Context);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ru0grmi', 'template_afulw8l', form.current, 'qjkj3ZGqx0BDvFYnH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      swal("bien", "Mensaje enviado con exito", "success")
      setBasicModal(!basicModal)

  };



  const token = store.token;
  const email = store.email;
  const id = store.id;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);


  const seleccionado = (e) => {
    e.target.className = "cardMensaje2";
  };





  return (
    <div className="">
      <MDBCol className="mt-5 mb-2">
      <Card className="cardMensaje " >
        <Card.Body className="cardMensaje">
        {/* <button
            onClick={(e) => {
              seleccionado(e);
            }}
          >
            Leido
          </button> */}
          <Card.Title className="tituloMensaje">{subject} </Card.Title>
          <Card.Text className="textoMensajedesc">{message}</Card.Text>
        </Card.Body>
        <Card.Body className="cardMensajeMail">
        <Card.Text className="textoMensaje4">Enviado por: {sender}</Card.Text>
        <button onClick={toggleShow} className="mb-4 px-5 bt-loginparaformmensaje" >Responder Mensaje</button>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' >
        <MDBModalDialog >
          <MDBModalContent className="pruebacontainermensaje py-3">
           
        <div className='container py-2 '>
        <h1 className="mb-5">Responder Mensaje</h1> 
        <form className='cf mt-2' ref={form} onSubmit={sendEmail}> 
        <MDBInput id='form4Example1' wrapperClass='mb-4 mt-3' label='Name' name="user_name" required />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' name="user_email" value={sender} readonly/>
      <MDBTextArea style={{ resize: "none" }}
            required wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' name="message"/>

      
      <button className="mb-4 px-5 bt-login"  type="submit" >Enviar Mensaje</button>
        </form> 
        
    </div>

            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

        </Card.Body>
      </Card>
      </MDBCol>
    </div>
  );
};
export default MensajesClientes;
