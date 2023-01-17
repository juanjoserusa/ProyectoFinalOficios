import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="container text-center pageLogin">
      <h1>Iniciar Sesion</h1>

      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div className="formularioLogin">
          <input
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="inputLogin"
          ></input>
          <input
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="inputLogin"
          ></input>
          <button className="btn btn-warning" onClick={handleClick}>Enviar</button>{" "}
        </div>
      )}
    </div>
  );
};
