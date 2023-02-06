import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/formulario.css";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import hombre from "../../assets/hombre.png";
import mujer from "../../assets/mujer.png";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardImage,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";

export const PublicarAnuncio = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    profesion: "",
    anuncio: "",
    precio: "",
    codigoPostal: "",
  });

  const navigate = useNavigate();
  const { store } = useContext(Context);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + store.token,
      },
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/publicarAnuncio", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    swal("¡Enhorabuena!", "¡ Tu anuncio se ha publicado con exito!", "success");
    navigate("/");
  };

  return (
    <div className=" mb-5 pruebaanuncio d-flex justify-content-center">
      <MDBCol md="4">
        <MDBCardImage
          src={mujer}
          alt="login form"
          className="rounded-start w-100 imagenanuncio"
        />
      </MDBCol>
      <MDBCol md="4">
        <form
          className=" cardanuncionuevo ps-5 pe-5 py-3 "
          onSubmit={enviarDatos}
        >
          <h2
            className="fw-normal mt-4 mb-3 pb-3 text-center"
            style={{ letterSpacing: "1px" }}
          >
            Publica tu anuncio
          </h2>

          <select
            id="profession"
            type="text"
            placeholder="Profesion"
            className="areaarea "
            name="profesion"
            lable="Profesion"
            onChange={handleInputChange}
            required
          >
            <option selected>Selecciona tu profesión</option>
            <option> Fontanero</option>
            <option> Albañil</option>
            <option> Carpintero</option>
            <option> Electricista</option>
          </select>
          <label className="mb-4">Profesión</label>
          <MDBInput
            wrapperClass="mb-4"
            label="Nombre"
            onChange={handleInputChange}
            id="name"
            name="nombre"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            type="number"
            id="zipcode"
            name="codigoPostal"
            label="Codigo Postal"
            onChange={handleInputChange}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            type="number"
            id="price"
            name="precio"
            label="Precio por hora"
            onChange={handleInputChange}
            required
          />
          <MDBTextArea
            wrapperClass="mb-4"
            textarea
            id="announce"
            name="anuncio"
            rows={4}
            label="Descripcion del anuncio"
            onChange={handleInputChange}
            style={{ resize: "none" }}
            required
          />

<button className="mb-4 px-5 bt-login" type="submit" >Publicar anuncio</button>
        </form>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardImage
          src={hombre}
          alt="login form"
          className="rounded-start w-100 imagenanuncio"
        />
      </MDBCol>
    </div>
  );
};
