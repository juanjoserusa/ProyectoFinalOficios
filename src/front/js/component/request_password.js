import React, { useState, useRef, useContext,useEffect } from "react";
import emailjs from "@emailjs/browser";
import moment from 'moment';
import { Context } from "../store/appContext.js"
import "../../styles/requestpass.css"

export const RequestPass  = () => {
    const [email ,setEmail] = useState("")
    const { store, actions } = useContext(Context);
    const [key, setKey] = useState("");
    const [key_pass ,setKey_pass] =useState ('');
    const [expirationDate, setExpirationDate] = useState("");
    
   


    const generateTemporaryKey = () => {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*?<>';
      let key = '';
    
      for (let i = 0; i < 12; i++) {
          key += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    
      const expirationDate = moment().add(45, 'minutes').fromNow();
    
      return { key, expirationDate };
    }
    
    useEffect(() => {
      const  keyObject = generateTemporaryKey();
      setKey(keyObject.key);
      setExpirationDate(keyObject.expirationDate);
    }, []);
    
    const handleChange = (event) =>{
      setEmail (event.target.value) 
     }

     const form = useRef(); 

 
  const sendEmail = (e) => {
    e.preventDefault();

    //   emailjs.sendForm('service_ru0grmi','template_i02czvn', form.current, 'qjkj3ZGqx0BDvFYnH')
    //     .then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
   const data = {
    service_id: 'service_ru0grmi',
    template_id: 'template_i02czvn',
    user_id: 'qjkj3ZGqx0BDvFYnH',
    template_params: {
        'user_email': email ,
        'key_pass': key,
        'expiration_date': expirationDate
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

    // setTimeout(function(){
    //   window.location.href ="request_password/reset_password";
    // }, 20000);


  return (
    <div className=" text-center pageRequest">  
      <div className="request Frm">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <h1>Recupera tu contraseña</h1> 
            <input
              type="email"
              className="email input"
              placeholder="Enter email"
              id="user_email"
              name="user_email" 
              onChange={handleChange}
            />
             <input type="hidden"  name="key_pass"  id= "key_pass" value={key_pass} />
             <input type ="hidden" name="expiration_date"  id="expiration_date" value ={expirationDate}/>
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
          </button>
        </form>
      </div>
     </div> 
  );
};

