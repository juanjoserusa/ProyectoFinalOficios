import React, { useState, useRef, useContext,useEffect } from "react";
import { Router, useHistory } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import moment from 'moment';
import { Context} from "../store/appContext"

export const RequestPass  = () => {
    const [email ,setEmail] = useState("")
    const { store, actions } = useContext(Context);
    const [key_pass, setKey_pass] = useState();
    const expirationDate = moment().add(30, 'minutes').fromNow()

   
    useEffect(() => {
      setKey_pass(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    },[])

    const handleChange = (event) =>{
      setEmail (event.target.value) 
     }
  
    const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

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
        'key_pass': key_pass,
        'expiration date': expirationDate
    }
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
     })
     .then(res => res.json())
     .then(res => {
       console.log(res);
     })
     .catch(err => {
       console.log(err);
     });    
    }
    function handleClick() {
      history.push('/reset_password');
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
             <input type="hidden"  name="key_pass"  id= "key_pass" value={key_pass} />
             <input type ="hidden" name= "expir_date" value ={expirationDate}/>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>        
          </div>
          <button
            type="submit"
            valu="send"
            class="btn btn-primary" 
            onClick={handleClick}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

