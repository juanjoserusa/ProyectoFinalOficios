import React, { useState, useContext,} from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/mensaje.css'
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

export const Mensaje = (props) => {

  const { store, actions } = useContext(Context);

  const token = store.token;
  const email = store.email

  const navigate = useNavigate()

  const parametros = useParams()

  const [datos, setDatos] = useState({
    from: email,
    to: parametros.user_id,
    subject: "",
    message: "",
    sender: email,
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

    fetch(process.env.BACKEND_URL + "/api/enviarMensaje", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

      navigate("/")
  }
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
        <form onSubmit={enviarDatos} className="ps-5 pe-5 py-3 ">
          <h2
            className="fw-normal mt-4 mb-3 pb-3 text-center"
            style={{ letterSpacing: "1px" }}
          >
            Enviar mensaje
          </h2>

          <MDBInput
            wrapperClass="mb-4"
            type="text"
            id="exampleFormControlInput1"
          name="subject"
          onChange={handleInputChange}
            label="Asunto del mensaje"
          />
          <MDBTextArea
            wrapperClass="mb-4"
            textarea
            id="exampleFormControlTextarea1"
          onChange={handleInputChange}
          name="message"
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
};
