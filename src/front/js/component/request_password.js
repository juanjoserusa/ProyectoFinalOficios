import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
// import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass  = () => 
  // const [email, setEmail] = useState("email");
  // const correo=store.email;


    {const  getUserData = ({userData}) => {

      const token = store.token;
    
      const { store, actions } = useContext(Context);
      const options = {
      headers: {
        Authorization: "Bearer " + store.token,
      },
    };
    try {
      fetch(process.env.BACKEND_URL + "/api/sessionlogin", options)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setStore({ message: data.message, email: data.email, id: data.id ,password : data.password});
        })
        .catch((error) => console.log("Error usuario no se encuentra", error));
    } catch (error) {
      console.log("Error from backend", error);
    }
  };


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
            {/* <input type="hidden" id="user_pass" name="user_pass"  value= "user_pass"></input>  */}
          </button>
        </form>
      </div>
    </div>
  );
};
