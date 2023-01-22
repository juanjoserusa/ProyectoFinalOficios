import React, { useState, useRef, useContext } from "react";
import { CheckEmail } from "../component/check_email.js";
import emailjs from "@emailjs/browser";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("email");
  const user_email = store.email;
  const user_pass = store.password;
  
    console.log('Email:', email);
    console.log('Password:', password);
  





    

  const SendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_ru0grmi",
        "template_i02czvn",
        form.current,
        "0XdsQdYfjEG1lc2qh"
      );
      const response = await fetch(
        `https://api.mipagina.com/reset-password/${correo}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container-fluid center">
      <div className="row">
        <form ref={form} onSubmit={SendEmail}>
          <div className="form-group">
            <label for="user_email">Recupera tu contraseña</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="user_email"
              name="user_email"
              onChange={(e) => CheckEmail(e.target.value)}
            >
              {response && <p>{response}</p>}
            </input>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>
          </div>
          <button
            type="submit"
            valu="send"
            class="btn btn-primary"
            onSubmit={SendEmail}
          ></button>
        </form>
      </div>
      <input type="hidden" name="token" value={user_pass} />
    </div>
  );
};
