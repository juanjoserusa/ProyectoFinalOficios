import React, { useState, useRef, useContext,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const RequestPass  = () => {
    const [password, setPassword] = useState("lunes");
    const { store, actions } = useContext(Context);
    const contrasena =store.password;
    // var input =document.getElementById("password")

     useEffect(() => {
      actions.getUserData(password)

    },[])
     
    const [email ,setEmail] = useState("")

    const handleChange = (event) =>{
      setEmail (event.target.value) 
    }
    
  const form = useRef();
 
  const sendEmail = (e) => {
    console.log(e)
    e.preventDefault();
    // input.value=contrasena

    console.log(contrasena)

    console.log(form.current)

  //   emailjs.sendForm('service_ru0grmi','template_i02czvn', form.current, '0XdsQdYfjEG1lc2qh')
  //     .then((result) => {
  //         console.log(result);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  const data = {
    service_id: 'service_ru0grmi',
    template_id: 'template_i02czvn',
    user_id: '0XdsQdYfjEG1lc2qh',
    template_params: {
        'user_email': email ,
        'password': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd'
    }
};
    fetch("https://api.emailjs.com/api/v1.0/email/send",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'
      },
     })
  }

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
              onChange={handleChange}
            />
             <input type="hidden"  name="contasena" id={contrasena} value={contrasena} />
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>
              
          </div>
          <button
            type="submit"
            valu="send"
            class="btn btn-primary" 
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};


