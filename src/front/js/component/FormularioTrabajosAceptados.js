import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/formularioTrabajos.css"

const FormularioTrabajosAceptados = () => {


    return (<>
    <Form className="formularioTrabajos ">
        <div className=" d-flex">
      <Form.Group className="mb-1 " >
        <Form.Label>Trabajo para : </Form.Label>
        <Form.Control type="text" placeholder="Mail cliente" className ="inputTrabajos"/>
        <Form.Label>Descripcion </Form.Label>
        <Form.Control type="text" placeholder="Resumen trabajo" className ="inputTrabajos"/>
      </Form.Group>
      <Form.Group className="mb-1 " controlId="formBasicEmail">
        
      </Form.Group>
      <Form.Group className="mb-1 inputTrabajos" controlId="formBasicEmail">
        <Form.Label>Precio por hora </Form.Label>
        <Form.Control type="number" placeholder="Precio" className ="inputTrabajos"/>
        <Form.Label>Horas de trabajo </Form.Label>
        <Form.Control type="number" placeholder="Horas" className ="inputTrabajos"/>
      </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Aceptar
      </Button>
    </Form>
    </>)
}

export default FormularioTrabajosAceptados