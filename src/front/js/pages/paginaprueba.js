import React, { useState, useContext } from "react";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/formTrabajos.css"
import { MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Prueba = () => {
  const { store, actions } = useContext(Context);

  const parametros = useParams();
  const navigation = useNavigate();

  const [trabajos, setTrabajos] = useState({
    cliente: "",
    descripcion: "",
    precio: "",
    horas: "",
    dia: "",
    mes: "",
    anio: "",
    id_profesional: parametros.id,
  });

  const handleInputChange = (event) => {
    setTrabajos({
      ...trabajos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(trabajos);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/enviartrabajos", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    navigation(0);
  };
  
  return (
    <div className="container">
      <form onSubmit={enviarDatos}>
      <MDBRow>
      <MDBCol>
          <MDBInput           id="exampleFormControlInput1 "
          onChange={handleInputChange}
          name="cliente" label='Cliente' />
        </MDBCol>
        <MDBCol>
          <MDBInput           id="exampleFormControlInput1"
          name="precio"
          onChange={handleInputChange} label='Precio por hora' type='number' />
        </MDBCol>
        <MDBCol>
          <MDBInput           id="exampleFormControlInput1"
          onChange={handleInputChange}
          name="horas" label='Horas trabajadas' type='number' />
        </MDBCol>
        <MDBCol>
          <MDBInput           id="exampleFormControlInput1"
          onChange={handleInputChange}
          name="dia" label='Dia' type='number'/>
        </MDBCol>
        <MDBCol>
          <MDBInput           id="exampleFormControlInput1"
          onChange={handleInputChange}
          name="mes" label='Mes' type='number'/>
        </MDBCol>
        <MDBCol>
          <MDBInput id="exampleFormControlInput1"
          onChange={handleInputChange}
          name="anio" label='Año' type='number' />
        </MDBCol>
      </MDBRow>


      <MDBRow>
        <MDBCol>
          <MDBInput           id="exampleFormControlTextarea1"
          onChange={handleInputChange}
          name="descripcion" label='Descripcion del trabajo' />
        </MDBCol>
      </MDBRow>


      <MDBRow>
        <MDBCol className="d-flex justify-content-center">
      <button type="submit" className="btn boton-enviar-form mb-4 ">
            Enviar
          </button>
          </MDBCol>
          </MDBRow>
          </form>
        </div>
  );
};

export default Prueba