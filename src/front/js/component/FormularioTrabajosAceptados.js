import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import {  useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/formularioTrabajos.css";

const FormularioTrabajosAceptados = (props) => {
  const [datos, setDatos] = useState({
    mail_cliente: "",
    descripcion: "",
    precio: "",
    horas: "",
    dia: "",
    mes: "",
    año: "",
   
  });



  const { store } = useContext(Context);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + store.token,
      },
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/todolist", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Form className="formularioTrabajos " onSubmit={enviarDatos}>
        <div className=" d-flex">
          <Form.Group className="mb-1 ">
            <Form.Label>Trabajo para : </Form.Label>
            <Form.Control
            id="mail_cliente"
            name="mail_cliente"
              type="text"
              placeholder="Mail cliente"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
            <Form.Label>Descripcion </Form.Label>
            <Form.Control
            id="descripcion"
            name="descripcion"
              type="text"
              placeholder="Resumen trabajo"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-1 " controlId="formBasicEmail"></Form.Group>
          <Form.Group className="mb-1 inputTrabajos" controlId="formBasicEmail">
            <Form.Label>Precio por hora </Form.Label>
            <Form.Control
            id="precio"
            name="precio"
              type="number"
              placeholder="Precio"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
            <Form.Label>Horas de trabajo </Form.Label>
            <Form.Control
            id="horas"
            name="horas"
              type="number"
              placeholder="Horas"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-1 inputTrabajos" controlId="formBasicEmail">
            <Form.Label>Dia</Form.Label>
            <Form.Control
            id="dia"
            name="dia"
              type="number"
              placeholder="Dia"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
            <Form.Label>Mes </Form.Label>
            <Form.Control
            id="mes"
            name="mes"
              type="number"
              placeholder="Mes"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
            <Form.Label>Año </Form.Label>
            <Form.Control
            id="año"
            name="año"
              type="number"
              placeholder="Año"
              className="inputTrabajos"
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Aceptar
        </Button>
      </Form>
    </>
  );
};

export default FormularioTrabajosAceptados;
