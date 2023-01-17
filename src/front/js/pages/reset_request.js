import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";


export const Reset_Request = () => {
  //const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  //const navigate = useNavigate();


  // const handleClick = () => {
  //   if (actions.login(email)) navigate("/");                         //* esa action? 
  // };

  return (
    <div className="container-fluid text-center">
      <h1>Nueva contraseña</h1>
        <div>
          <input
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <button className="btn btn-warning" onClick={handleClick}>Enviar</button>{" "}
        </div>
    </div>
  );
};
