import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass  = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("email");
  const correo=store.email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
     var user_pass ="mensaje"


     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://3001-juanjoserus-proyectofin-z2ja69dm9cp.ws-eu83.gitpod.io/api/request_password",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {user_pass = result.mensaje}),
       console.log(result)
      .catch((error) => console.log("error", error));
    emailjs
      .sendForm(
        "service_ru0grmi",
        "template_i02czvn",
        form.current,
        "_axOPzpSoTd8XH4fF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid center">
      <div className="row">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label for="user_email">Recupera tu contraseña</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="user_email"
              name="user_email"
            ></input>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>

          </div>
          <button
            type="submit"
            valu="send"
            class="btn btn-primary"
            onSubmit={sendEmail}
          >
            Enviar
            <input type="hidden" id="user_pass" name="user_pass"  value= "user_pass"></input> 
          </button>
        </form>
      </div>
    </div>
  );
};


