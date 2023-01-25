import React, { useState, useRef, useContext,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass  = () => {
    const [password, setPassword] = useState(" ");
    const { store, actions } = useContext(Context);
    const user_pass=store.password;
    

     useEffect(() => {
      actions.getUserData(user_pass)

    },[])
     
    function handleChange(event) {
      setPassword(event.target.value);
    }

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
    fetch("https://api.emailjs.com/api/v1.0/email/send-form",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'
      },
  })


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
            onChange={handleChange}
          >
            Enviar
          </button>
          <input type="hidden" id="user_pass" name="user_pass"  value={password} > </input>
        </form>
      </div>
    </div>
  );
};


