import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalProfesiones(props) {

  
const [datos, setDatos] = useState({
  mail:'',
  asunto: '',
  mensaje: '',
  id: props.userid
})

const handleInputChange = (event) => {
setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
}

const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.mail + ' ' + datos.asunto + ' ' + datos.mensaje + ' ' + datos.id) 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(datos);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch(process.env.BACKEND_URL + "/api/enviarMensaje", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-outline-success" onClick={handleShow}>
        Pedir Presupuesto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviarDatos}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="tunombre@mail.com"
                autoFocus
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={handleInputChange}
            >
              <Form.Label>Pide tu presupuesto</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="btn btn-outline-success" type= 'submit'>
            Enviar Mensaje
          </Button>
          <Button variant="btn btn-outline-success" onClick={handleClose}>
            Visitar Perfil
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalProfesiones;

