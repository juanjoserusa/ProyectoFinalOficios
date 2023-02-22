import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/prueba.css";
import handlehome from "../../assets/Handlehome.png"
import login from "../../assets/login2.png"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

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

  
  const handleClose = () => {
    setShow(false);
  };

  console.log("this is your token", store.token);

  const handleClick = () => {
    
    if (actions.login(email, password)  && token != "" )
    {console.log(email)
    swal(`Bienvenido  ${email}`, `Has iniciado sesion correctamente a Handlehome `, "success");
    navigate("/")}
    else {
      swal(`Lo siento`, `Compruebe que su email y contraseña están registrados, o bien escritos`, "error");
    navigate("/")}
    }
  ;

  const ok = () => {
    swal(`Bienvenido  ${email}`, `Has iniciado sesion correctamente a Handlehome `, "success");
    navigate("/")
  }

  return (
    <div>
      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div>
        <MDBContainer className="mt-4 mb-5 pruebacontainer">
    
          <MDBCard className="cardlogin">
            <MDBRow className='g-0'>
    
              <MDBCol className="imagenlogin d-flex justify-content-center"  md='6'>
                <MDBCardImage src={login} alt="login form" className='rounded-start w-100 imagenlogin'/>
              </MDBCol>
    
              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column columnalogin'>
    
                  <div className='d-flex flex-row mt-2 justify-content-center'>
                    
                    <img className="h1 fw-bold mb-0 logologin" src={handlehome} width="75%"/>
                  </div>
    
                  <h3 className="fw-normal mt-4 mb-3 pb-3 text-center" style={{letterSpacing: '1px'}}>Inicia Sesión</h3>
    
                    <MDBInput wrapperClass='mb-4' label='Email ' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required/>
                    <MDBInput onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>
    
                  <button className="mb-4 px-5 bt-login" onClick={handleClick} >Iniciar sesión</button>
                  <Link to={"/request_password"} className="text-center mb-3">
                    ¿ Olvidaste tu contraseña ?
                  </Link>
                  
    
                </MDBCardBody>
              </MDBCol>
    
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>
        </div>
      )}

      
    </div>
  );
};
