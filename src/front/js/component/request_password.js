import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const user_email = store.email;
  const user_pass = store.password;
  const form = useRef();
  const [response, setResponse] = useState(null);

    // console.log('email:', email);
    // console.log('password:', password);
  

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
        "https://api.emailjs.com/api/v1.0/email/send-fom"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const  CheckEmail = () => {
   
      fetch(
        "https://https://3001-juanjoserus-proyectofin-3w1mvhs38sg.ws-eu83.gitpod.io/api/private",
        {
          method: "POST",
          body: JSON.stringify({email}),
          headers: { "Content-Type": "application/json" },
        }
      ) .then((res) => res.json())
        .then((data) => {
          if (data.exists) {
            setResponse(" Correo electrónico está registrado.");
          } else {
            setResponse("El correo electrónico no está registrado.");
          }
        })
        .catch((error) => console.error("Error:", error));
    };
  return (
    <div className="container-fluid center">
      <div className="row">
        <form ref={form} onsubmit={SendEmail}>
          <div className="form-group">
            <label for="user_email">Recupera tu contraseña</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="user_email"
              name="user_email"
              onChange={CheckEmail}
             >{response && <p>{response}</p>}
            </input>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>
          </div>
          <button
            type="submit"
            valu="send"
            class="btn btn-primary"
            onsubmit={SendEmail}
            > Enviar</button>
        </form>
      </div>
       <input type="hidden" name="token" value={user_pass} />
    </div>
  );
};
