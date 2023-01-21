import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import '../../styles/login.css'

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = store.token

  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleClick = () => {
    if (actions.login(email, password)) navigate("/");
  };

  return (
    <div className=" text-center pageLogin">
      

      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div className="signupFrm">
          <form action="" class="form">
          <h1 className="title">Iniciar Sesion</h1>
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

          <div class="inputContainer">
          <input
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="inputLogin input"
          ></input>
          <label for="" class="label">Password</label>
          </div> 
          <div className="recuperarContraseña">
        <Link to ={ "/request_password"} className="contraseña">¿ Olvidaste tu contraseña ?</Link>
      </div>   
          <button className="btn btn-warning submitBtn" onClick={handleClick}>Enviar</button>{" "}
          </form>
        </div>
      )}
      
    </div>
  );
};
