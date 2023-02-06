import React from "react";
import mensajeo from "../../assets/mensajeo.png";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardImage,
  MDBTextArea,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Prueba() {
  return (
    <div className="">

<MDBContainer className="mt-4 mb-5 pruebacontainer">
    
          <MDBCard className="cardlogin">
            <MDBRow className='g-0'>
    
              <MDBCol className="imagenlogin d-flex justify-content-center ps-5   "  md='5'>
              <MDBCardImage
          src={mensajeo}
          alt="login form"
          className="rounded-start w-100 imagelogin "
        />
              </MDBCol>
    
              <MDBCol md="7" className="columnalogin" >
        <form className="ps-5 pe-5 py-3 ">
          <h2
            className="fw-normal mt-4 mb-3 pb-3 text-center"
            style={{ letterSpacing: "1px" }}
          >
            Enviar mensaje
          </h2>

          <MDBInput
            wrapperClass="mb-4"
            type="text"
            id="form6Example5"
            label="Asunto del mensaje"
          />
          <MDBTextArea
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={5}
            label="Texto del mensaje"
          />

          <MDBBtn className="mb-4 mb-4 px-5 bt-login" type="submit" block>
            Publicar anuncio
          </MDBBtn>
        </form>
      </MDBCol>
    
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>


      
    </div>
  );
}

export default Prueba;
