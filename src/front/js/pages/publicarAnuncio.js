import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext" 
import "../../styles/formulario.css";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";





export const PublicarAnuncio = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    profesion: "",
    anuncio: "",
    precio: "",
    codigoPostal: "",
  });

  const navigate = useNavigate()
  const {store} = useContext(Context)

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    navigate("/")
    

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
              name="profesion">
            <option selected>Selecciona tu profesión</option>
            <option >Albañil</option>
            <option>Fontanero</option>
            <option >Albañil</option>
            <option>Fontanero</option>
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
              className="form-control"
              onChange={handleInputChange}
              name="anuncio"
            ></textarea>
          </div>
          <div className="inputContainer">
          {/* <Link to="/profesiones/anuncios"> */}
            <button type="submit" className="btn btn-primary submitBtn formbtn mb-3 mt-5 ">
              Enviar
            </button>
            </div>
          {/* </Link> */}
        </form>
        </div>
      </div>

      {/* <div className="container cardAnuncioEjemplo">
        <h2>Previsualiza tu anuncio</h2>

        <div className="col-2 card m-2" style={{ backgroundColor: "#ffface" }}>
          <div className="card-body cardAnuncio">
            <h5 className="card-title tituloCard">{datos.profesion}</h5>
            <p className="card-text text-dark anuncio">{datos.anuncio}</p>

            <ul className="datosCard">
              <li>{datos.nombre}</li>
              <li>{datos.codigoPostal}</li>
              <li>{datos.precio}</li>
            </ul>

            <ModalProfesiones />
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
