import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [mensaje, setMensaje] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [datos, setDatos] = useState({
    email: "",
    password: "",
    user_type: false,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMensaje(result.mensaje);
      })
      .catch((error) => console.log("error", error));

    setShow(true);
  };

  return (
    <div>
      <h1 className="text-center">Crear Usuario</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="formulario" onSubmit={enviarDatos}>
          <div className="">
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              className="form-control"
              onChange={handleInputChange}
              name="email"
              required
            ></input>
          </div>
          <div className="">
            <input
              id="password"
              minLength="2"
              type="password"
              placeholder="Ingrese su password"
              className="form-control"
              onChange={handleInputChange}
              name="password"
              required
            ></input>
          </div>
          <div className="d-flex justify-content-around">
            ¿Eres un profesional?
            <input
              type="checkbox"
              onClick={() => {
                setDatos({ ...datos, user_type: !datos.user_type });
              }}
              name="user_type"
            ></input>
          </div>

          <Button variant="primary" type="submit">
            Enviar
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Bienvenido a HandleHome</Modal.Title>
            </Modal.Header>
            <Modal.Body>{mensaje}</Modal.Body>
            {mensaje == "Usuario ya registrado" ? (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </Modal>
        </form>
      </div>
    </div>
  );
};
