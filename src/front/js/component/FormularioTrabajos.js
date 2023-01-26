import React, { useState, useContext } from "react";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import { useParams } from "react-router-dom";

export const FormularioTrabajos = () => {
  const { store, actions } = useContext(Context);

  const parametros = useParams();

  const [trabajos, setTrabajos] = useState({
    cliente: "",
    descripcion: "",
    precio:"",
    horas:"",
    dia: "",
    mes : "",
    anio :"",
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

      location. reload()
  };
  return (
    <div className="">
      <div className="">
        <form onSubmit={enviarDatos} className="">
          <h1 className="">Formulario</h1>

          <div className="">
            <label for="" class="">
              cliente
            </label>
            <input
              required
              type="text"
              className=""
              id="exampleFormControlInput1"
              placeholder="Cliente"
              onChange={handleInputChange}
              name="cliente"
            />
          </div>

          <div className="">
            <label for="" class="">
              descripcion
            </label>
            <textarea
              required
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              cols="1"
              placeholder="descripcion"
              onChange={handleInputChange}
              name="descripcion"
            ></textarea>

          </div>
          <div className="">
            <label for="" class="">
              Precio
            </label>
            <input
              required
              type="number"
              className=""
              id="exampleFormControlInput1"
              placeholder="Precio"
              onChange={handleInputChange}
              name="precio"
            />
          </div>

          <div className="">
            <label for="" class="">
              Horas
            </label>
            <input
              required
              type="number"
              className=""
              id="exampleFormControlInput1"
              placeholder="Horas"
              onChange={handleInputChange}
              name="horas"
            />
          </div>

          <div className="">
            <label for="" class="">
              Dia
            </label>
            <input
              required
              type="number"
              className=""
              id="exampleFormControlInput1"
              placeholder="Dia"
              onChange={handleInputChange}
              name="dia"
            />
          </div>

          <div className="">
            <label for="" class="">
              Mes
            </label>
            <input
              required
              type="number"
              className=""
              id="exampleFormControlInput1"
              placeholder="Mes"
              onChange={handleInputChange}
              name="mes"
            />
          </div>

          <div className="">
            <label for="" class="">
              Año
            </label>
            <input
              required
              type="number"
              className=""
              id="exampleFormControlInput1"
              placeholder="Año"
              onChange={handleInputChange}
              name="anio"
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary ">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
