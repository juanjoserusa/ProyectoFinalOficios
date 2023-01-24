import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
// import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass  = () => {
  // const { store, actions } = useContext(Context);
  // const [email, setEmail] = useState("email");
  // const correo=store.email;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ru0grmi','template_i02czvn', form.current, '0XdsQdYfjEG1lc2qh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    fetch("https://api.emailjs.com/api/v1.0/email/send-fom",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'
      },
  })

  return (
    <div className="text-center pageLogin">
      <div className="signupFrm">
        <form ref={form} onSubmit={sendEmail} className="form">
        <h1 className="title">Recuperar contraseña</h1>
          <div className="form-group inputContainer ">
          
            <label for="user_email" className="label">Recupera tu contraseña</label>
            <input
              type="email"
              class="form-control input"
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
            class="btn btn-primary submitBtn"
            onSubmit={sendEmail}
          >
            Enviar
            {/* <input type="hidden" id="user_pass" name="user_pass"  value= "user_pass"></input>  */}
          </button>
        </form>
      </div>
    </div>
  );
};
