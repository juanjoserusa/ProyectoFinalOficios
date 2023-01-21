import React, { useState, useContext,} from "react";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import { useNavigate, useParams } from "react-router-dom";

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
    <form onSubmit={enviarDatos}>
      <h1>Mensajes</h1>

      
      <div class="form-group mt-3">
        <label for="exampleFormControlInput1">Asunto</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Asunto"
          onChange={handleInputChange}
          name="subject"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Mensaje</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleInputChange}
          name="message"
        ></textarea>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
};
