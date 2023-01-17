import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";


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
    <div className="container-fluid text-center">
      <h1>Iniciar Sesion</h1>

      {token && token != "" && token != undefined ? (
        "You are logged in with this token" + token
      ) : (
        <div>
          <input
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <input
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
          <button className="btn btn-warning" onClick={handleClick}>Enviar</button>{" "}
        </div>
      )}
      <div>
        <a href= "/reset_password"> Olvidaste tu contraseña ?</a>
      </div>
    </div>
  );
};
