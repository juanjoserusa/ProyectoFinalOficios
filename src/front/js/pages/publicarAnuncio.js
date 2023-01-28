import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/formulario.css";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

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
    navigate("/");

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
  };
  return (
    <Fragment>
      <div className="text-center pageLogin">
        <div className="signupFrmanuncio">
          <form className="formanuncio" onSubmit={enviarDatos}>
            <h1 className="title">Formulario de anuncio</h1>
            <div className="inputContainer">
              <select
                id="profession"
                type="text"
                placeholder="Profesion"
                className="form-control mb-2 input"
                onChange={handleInputChange}
                name="profesion"
              >
                <option selected>Selecciona tu profesión</option>
                <option> Fontanero</option>
                <option> Albañil</option>
                <option> Carpintero</option>
                <option> Electricista</option>
              </select>
            </div>
            <div className="inputContainer">
              <input
                id="name"
                type="text"
                placeholder="Nombre"
                className="form-control input"
                onChange={handleInputChange}
                name="nombre"
              ></input>
            </div>

            <div className="inputContainer">
              <input
                id="zipcode"
                type="text"
                placeholder="Codigo postal"
                className="form-control input"
                onChange={handleInputChange}
                name="codigoPostal"
              ></input>
            </div>
            <div className="inputContainer">
              <input
                id="price"
                type="text"
                placeholder="Precio por hora"
                className="form-control input"
                onChange={handleInputChange}
                name="precio"
              ></input>
            </div>
            <div className="inputContainer">
              <textarea
                id="announce"
                rows="5"
                cols="1"
                type="text"
                placeholder="Anuncio"
                className="form-control areaAnuncio"
                onChange={handleInputChange}
                name="anuncio"
              ></textarea>
            </div>
            <div className="inputContainer">
              <button
                type="submit"
                className="btn btn-primary submitBtn formbtn mb-3 mt-5 "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
