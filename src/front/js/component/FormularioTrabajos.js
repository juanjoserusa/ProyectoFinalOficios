import React, { useState, useContext } from "react";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/formTrabajos.css"

export const FormularioTrabajos = () => {
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
    <div className="container ">
      <form onSubmit={enviarDatos} className="row ">
        <div className="d-flex justify-content-center">
        <h1 className="titleformtrabajo mb-3">Formulario</h1>
        </div>
        
        <div className="d-flex justify-content-center paginaformulario">
        
        <input
          required
          type="text"
          className="form-control me-3 inputprecio"
          id="exampleFormControlInput1 "
          placeholder="Cliente"
          onChange={handleInputChange}
          name="cliente"
        />
        
        <input
          required
          type="number"
          className="form-control  me-3 inputprecio"
          id="exampleFormControlInput1"
          placeholder="Precio"
          onChange={handleInputChange}
          name="precio"
        />

        
        <input
          required
          type="number"
          className="form-control me-3 inputprecio"
          id="exampleFormControlInput1"
          placeholder="Horas"
          onChange={handleInputChange}
          name="horas"
        />
        
        
        
        <input
          required
          type="number"
          className="form-control me-3 inputfecha"
          id="exampleFormControlInput1"
          placeholder="Dia"
          onChange={handleInputChange}
          name="dia"
        />

        
        <input
          required
          type="number"
          className="form-control me-3 inputfecha"
          id="exampleFormControlInput1"
          placeholder="Mes"
          onChange={handleInputChange}
          name="mes"
        />
        
       
        
        <input
          required
          type="number"
          className="form-control inputfecha"
          id="exampleFormControlInput1"
          placeholder="Año"
          onChange={handleInputChange}
          name="anio"
        />
        </div>
        <div className="d-flex justify-content-center">
        

        
        <textarea
          required
          className="form-control mt-3"
          id="exampleFormControlTextarea1"
          rows="2"
          cols="1"
          placeholder="descripcion"
          onChange={handleInputChange}
          name="descripcion"
        ></textarea>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn boton-enviar-form mb-4">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
