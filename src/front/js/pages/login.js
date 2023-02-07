import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import "../../styles/login.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";

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
    if (actions.login(email, password))
    console.log(email)
  };

  const ok = () => {
    swal(`Bienvenido  ${email}`, `Has iniciado sesion correctamente a Handlehome `, "success");
    navigate("/")
  }

  return (
    <div className=" text-center pageLogin">
      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div className="signupFrm">

          <form action="" class="formulariologin">
            <h1 className="title">Iniciar Sesion</h1>
            <div class="inputContainer">
              <input
                type="email"
                placeholder="Ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required

                className="inputlogin "
              ></input>
              <label for="" class="labellogin">
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
                className="inputlogin"
              ></input>
              <label for="" class="labellogin">
                Password
              </label>
            </div>
            <div className="recuperarContraseña">
              <Link to={"/request_password"} className="contraseña">
                ¿ Olvidaste tu contraseña ?
              </Link>
            </div>

            <Button className="btn  submitBtn" onClick={handleClick}>
              Enviar
            </Button>
          </form>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="titlemodal"
          closeButton
        >
          <Modal.Title className="titlewelcome">
            Bienvenido a HandleHome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fs-4 text modalbody">
          {!token ? (
            <div className="text-center fs-5 text mb-4" style={{color:"red"}}>
              El email o contraseña no coinciden con un usuario registrado
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
            </div>
          ) : (
            
            ok()
            
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
