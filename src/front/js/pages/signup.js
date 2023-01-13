import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
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

    fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    alert("te registraste con exito");
    location.href = "/login";
  };

  return (
    <div>
      <h1 className="text-center">Crear Usuario</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="formulario" onSubmit={enviarDatos}>
          <div className="">
            <input
              id="email"
              type="text"
              placeholder="Ingrese su email"
              className="form-control"
              onChange={handleInputChange}
              name="email"
            ></input>
          </div>
          <div className="">
            <input
              id="password"
              type="text"
              placeholder="Ingrese su password"
              className="form-control"
              onChange={handleInputChange}
              name="password"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
