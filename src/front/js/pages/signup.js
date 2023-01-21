import React, { useState } from "react";
import '../../styles/login.css'


export const SignUp = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    user_type: false
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

 
    location.href = "/login";
    alert("te registraste con exito");
  };

  return (
    <div className=" text-center pageLogin">
      <div className="signupFrm">
        <form onSubmit={enviarDatos} class="form">
      <h1 className="title">Crear Usuario</h1>
      <div className="inputContainer">
        {/* <form className="formulario" onSubmit={enviarDatos}> */}
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              className="input"
              onChange={handleInputChange}
              name="email"
              required
            ></input>
            <label for="" class="label">Email</label>
          </div>
          <div className="inputContainer">
            <input
              id="password"
              minlength="2"
              type="password"
              placeholder="Ingrese su password"
              className="input"
              onChange={handleInputChange}
              name="password"
              required
            ></input>
            <label for="" class="label">Password</label>
          </div>
          <div className="inputContainer checkbox">
            <div>
            ¿Eres un profesional? 
            </div>
            <div>
            <input
              type="checkbox"
              onClick={()=>{
                setDatos({...datos, user_type: !datos.user_type})
              }}
              name="user_type"
              className="cuadrocheck"

            ></input>
            </div>
          </div>
      

          <button type="submit" className="btn btn-primary submitBtn">
            Enviar
          </button>
        </form>
      </div>
      </div>
    
  );
};

