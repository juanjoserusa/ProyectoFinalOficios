
import "../../styles/prueba.css";
import handlehome from "../../assets/Handlehome.png"

import register from "../../assets/registro2.png"


import React from 'react';
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

function Prueba() {
  return (
    <MDBContainer className="mt-4  mb-5 pruebacontainer" >
      <form onSubmit={enviarDatos}>
      <MDBCard className="cardlogin">
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column columnalogin'>

              <div className='d-flex flex-row mt-2 justify-content-center'>
                
                <img className="h1 fw-bold mb-0 " src={handlehome} width="75%"/>
              </div>

              <h3 className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px'}}>Crea un nuevo usuario</h3>

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
              name="user_type"  id='formControlLg' name='checkNoLabel' value='' label='Crear un perfil profesional'  className="checkboxsignup text-center "/>
                
                </div>
                <div><span id='textExample2' className='form-text d-flex  justify-content-center text-center spanayuda'>
            ¿Que es un perfil profesional?
          </span></div>
          <button className="mb-4 px-5 bt-login" onClick={enviarDatos} >crear usuari</button>
              
              

            </MDBCardBody>
          </MDBCol>

          <MDBCol className="imagenlogin d-flex justify-content-center"  md='6'>
            <MDBCardImage src={register} alt="login form" className='rounded-start w-100 imagenlogin'/>
          </MDBCol>

        </MDBRow>
        
      </MDBCard>
      </form>

    </MDBContainer>
  );
}

export default Prueba;