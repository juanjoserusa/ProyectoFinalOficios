import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import "../../styles/login.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = store.token;
  const emailRegistrado = store.email;
  const passwordRegistrado = store.password;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  console.log("this is your token", store.token);

  const handleClick = () => {
    setShow(true);
    if (actions.login(email, password));
  };

  return (
    <div className=" text-center pageLogin">
      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div className="signupFrm">
          <form action="" class="form">
            <h1 className="title">Iniciar Sesion</h1>
            <div class="inputContainer">
              <input
                type="email"
                placeholder="Ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="inputLogin input"
              ></input>
              <label for="" class="label">
                Email
              </label>
            </div>
            <div class="inputContainer">
              <input
                type="password"
                placeholder="Ingrese su password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="inputLogin input"
              ></input>
              <label for="" class="label">
                Password
              </label>
            </div>
            <div className="recuperarContraseña">
              <Link to={"/request_password"} className="contraseña">
                ¿ Olvidaste tu contraseña ?
              </Link>
            </div>

            <Button className="btn btn-warning submitBtn" onClick={handleClick}>
              Enviar
            </Button>
          </form>
        </div>
      )}

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
        <Modal.Body className="text-center fs-4 text modalbody">
          {!token ? (
            <div className="text-center fs-5 text mb-4">
              El email o contraseña no coinciden con un usuario registrado
            </div>
          ) : (
            navigate("/")
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
