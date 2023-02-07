
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';



const Prueba = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ru0grmi', 'template_afulw8l', form.current, 'qjkj3ZGqx0BDvFYnH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
      return ( 
      <div> 
        <div className='container'>
        <h1>Contact Form</h1> 
        <form className='cf' ref={form} onSubmit={sendEmail}> 
        <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' name="user_name"/>
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' name="user_email"/>
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' name="message"/>

      

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>
        </form> 
        </div> 
    </div>
  );
}

export default Prueba