import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import handlehome from "../../assets/Handlehome.png"

import register from "../../assets/registro2.png"

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/login.css";

export const SignUp = () => {
  const [mensaje, setMensaje] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

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

    const signup = fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMensaje(result.mensaje);
        if (result.mensaje === "Usuario ya registrado")
        {swal(`Lo siento, algo ha fallado`, `Puede que su email y contraseña ya esten registrados, o mal escritos`, "error") 
        navigate("/signup")
      } else {
        swal(`Enhorabuena`, `Su cuenta se ha registrado con exito`, "success")
        navigate("/login")}
      })
      .catch((error) => swal(`Lo siento`, `Compruebe que su email y contraseña están registrados, o bien escritos`, "error"));

  };

  return (
    <div >
      <MDBContainer className="mt-4  mb-5 pruebacontainer" >
      <form onSubmit={enviarDatos}>
      <MDBCard className="cardlogin">
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column columnalogin'>

              <div className='d-flex flex-row mt-2 justify-content-center'>
                
                <img className="h1 fw-bold mb-0 logologin" src={handlehome} width="75%"/>
              </div>

              <h3 className="fw-normal mt-4 mb-2 pb-3 text-center" style={{letterSpacing: '1px'}}>Crea un nuevo usuario</h3>

              <MDBInput onChange={handleInputChange}
              name="email"
              required label='Email' id='typeEmail' type='email' wrapperClass ='mb-2'/>

          <span id='textExample2' className='form-text'>
            Debe tener de 4-8 caracteres.
          </span>

          <MDBInput minLength="2"
              maxLength="8"
              onChange={handleInputChange}
              name="password"
              required label='Contraseña' id='typePassword' type='password' wrapperClass ='mb-2'/>
                
          
        <div className="d-flex  justify-content-center text-center checkboxsignup ">
                <MDBCheckbox onClick={() => {
                setDatos({ ...datos, user_type: !datos.user_type });
              }}
              name="user_type"  id='formControlLg'  value='' label='Crear un perfil profesional'  className="checkboxsignup text-center "/>
                
                </div>
                <div><span id='textExample2' className='form-text d-flex  justify-content-center text-center spanayuda'>
            ¿Que es un perfil profesional?
          </span></div>
          <button className="mt-5 mb-4 px-5 bt-login" onClick={enviarDatos} >Crear usuario</button>
              
              

            </MDBCardBody>
          </MDBCol>

          <MDBCol className="imagenlogin2 d-flex justify-content-center"  md='6'>
            <MDBCardImage src={register} alt="login form" className='rounded-start w-100 imagenlogin2'/>
          </MDBCol>

        </MDBRow>
        
      </MDBCard>
      </form>

    </MDBContainer>

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
   
  );
};
