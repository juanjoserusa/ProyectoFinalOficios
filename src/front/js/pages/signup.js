import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import "../../styles/login.css";

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
    <div className=" text-center pageLogin">
      <div className="signupFrm">
        <form onSubmit={enviarDatos} className="form">
          <h1 className="title">Crear Usuario</h1>
          <div className="inputContainer">
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              className="input"
              onChange={handleInputChange}
              name="email"
              required
            ></input>
            <label for="" class="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              id="password"
              minLength="2"
              type="password"
              placeholder="Ingrese su password"
              className="input"
              onChange={handleInputChange}
              name="password"
              required
            ></input>
            <label for="" class="label">
              Password
            </label>
          </div>

          <div className="inputContainer checkbox">¿Eres un profesional?</div>
          <div>
            <input
              className="cuadrocheck"
              type="checkbox"
              onClick={() => {
                setDatos({ ...datos, user_type: !datos.user_type });
              }}
              name="user_type"
            ></input>
          </div>

          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary submitBtn"
          >
            Enviar
          </Button>
        </form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{backgroundColor:"#D0F3C6"}} closeButton>
            <Modal.Title >Bienvenido a HandleHome</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center fs-4 text">{mensaje}</Modal.Body>
          {mensaje == "Usuario ya registrado" ? (
            <Link to="/login" className="btn submitBtn">
              Iniciar Sesion
            </Link>
          ) : (
            <Link to="/login" className="btn submitBtn">
              Iniciar Sesion
            </Link>
          )}
        </Modal>
      </div>
    </div>
  );
};
