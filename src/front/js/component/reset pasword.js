
  import React, { useContext, useState } from "react";
  import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
  import '../../styles/login.css'
  import moment from 'moment';


  export const Reset_Password = () => 
  {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const key_pass = store.key_pass
    //     const navigate = useNavigate();


    const handleResetPassword = async (e) => {
      e.preventDefault();
    if (key_pass.key !== e.target.value) {
        setErrorMessage("La clave temporal es inválida");
        return;
    }
    if (moment().isAfter(key_pass.expirationDate)) {
        setErrorMessage("La clave temporal ha expirado");
        return;
    }
    return (
      <div className=" text-center pageReset">
        
          <div className="reset_Frm">
            <form action="reset" className="form">
              <h1 className="title">Nueva contraseña</h1>
              <div class="inputContainer">
              <input
                type="email"
                placeholder="Ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="inputLogin input"
              ></input>
              <label for="" class="label">Email</label>
              </div>
              <input
                type="key"
                placeholder="Ingrese key enviada por correo"
                onChange={(e) => key_pass(e.target.value)}
                value={key}
                required
                className="inputLogin Key"
              ></input>
              <label for="" class="label">Email</label>
              </div>
              <div class="inputContainer">
              <input
                type="password"
                placeholder="Ingrese su password"
                onChange={(e) => handleResetPassword}
                value="newPassword"
                required
                className="inputLogin input"
              ></input>
              <label for="" class="label">Password</label>
              </div> 
              <button className="btn btn-warning submitBtn" onClick={handleClick}>Enviar</button>{" "}
            </form>
          </div>
      )
      };
    };

