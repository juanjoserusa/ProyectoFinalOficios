import React, { useState } from "react";

export const Mensaje = (props) => {

  const [datos, setDatos] = useState({
    mail: "",
    asunto: "",
    mensaje: "",
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

  }
  return (
    <form onSubmit={enviarDatos}>
      <h1>Mensajes</h1>

      <div class="form-group mt-3">
        <label for="exampleFormControlInput1">Mail</label>
        <input
          type="mail"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Asunto"
          onChange={handleInputChange}
          name="mail"
        />
      </div>
      <div class="form-group mt-3">
        <label for="exampleFormControlInput1">Asunto</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Asunto"
          onChange={handleInputChange}
          name="asunto"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Mensaje</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleInputChange}
          name="mensaje"
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
