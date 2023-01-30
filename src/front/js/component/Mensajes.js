import React, { useState, useContext,} from "react";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/mensaje.css'
import swal from "sweetalert";


export const Mensaje = (props) => {

  const { store, actions } = useContext(Context);

  const token = store.token;
  const email = store.email

  const navigate = useNavigate()

  const parametros = useParams()

  const [datos, setDatos] = useState({
    from: email,
    to: parametros.user_id,
    subject: "",
    message: "",
    sender: email,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/enviarMensaje", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      swal("¡Enhorabuena!", "¡ Tu mensaje ha sido enviado correctamente!", "success")
     
      
      navigate("/")
  }
  return (
    <div className=" text-center pageLogin2">
    <div className="signupFrm2">
    <form onSubmit={enviarDatos} className="form2">
      <h1 className="title2">Enviar mensaje a un profesional</h1>

      
      <div className="inputContainer2 ">
        <label for="" class="label2">Asunto</label>
        <input
          type="text"
          className="input2"
          id="exampleFormControlInput1"
          placeholder="Asunto"
          onChange={handleInputChange}
          name="subject"
          required
        />
      </div>

      <div className="inputContainer2">
        <label for="" class="label2">Mensaje</label>
        <textarea
          className="form-control areamensaje"
          id="exampleFormControlTextarea1"
          rows="5"
          cols="1"
          placeholder="Mensaje"
          onChange={handleInputChange}
          name="message"
          required
        ></textarea>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-primary submitBtn2">
          Enviar
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};
