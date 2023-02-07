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
        <form onSubmit={enviarDatos} className="formulariologin">
          <h1 className="title">Crear Usuario</h1>
          <div className="inputContainer">
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              className="inputlogin"
              onChange={handleInputChange}
              name="email"
              required
            ></input>
            <label for="" class="labellogin">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              id="password"
              minLength="2"
              type="password"
              placeholder="Ingrese su password"
              className="inputlogin"
              onChange={handleInputChange}
              name="password"
              required
            ></input>
            <label for="" class="label">
              Password
            </label>
          </div>

          <div className="checkbox">¿Quieres crear un perfil profesional?</div>
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
          <Modal.Header
            className="titlemodal"
            style={{ backgroundColor: "#D0F3C6" }}
            closeButton
          >
            <Modal.Title className="titlewelcome">
              Bienvenido a HandleHome
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center fs-4 text modalbody"></Modal.Body>
          {mensaje == "Usuario ya registrado" ? (
            <div>
              <h3 className="mensajeSignupFail">
                {mensaje}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="red"
                  class="bi bi-x-octagon-fill ms-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </h3>
              <Link to="/login" className="btn submitBtnmodal">
                Iniciar Sesion
              </Link>
            </div>
          ) : (
            <div>
              <h3 className="mensajeSignupOk">
                {mensaje}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="green"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              </h3>
              <Link to="/login" className="btn submitBtnmodal">
                Iniciar Sesion
              </Link>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
