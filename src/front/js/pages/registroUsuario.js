import React, { useContext, useEffect } from "react";

import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";


const RegistroUsuario = () => {
  const { store, actions } = useContext(Context);
  const token = store.token;

  useEffect(() => {
    if (token && token != "" && token != undefined) actions.getMessage();
  }, [token]);

  return (

    <div className="d-flex justify-content-end"  style={{backgroundColor: "#f7f3b8",fontSize:"1.2rem"}}>
      <div>Bienvenido </div>
      <div className="ms-2">{store.email}</div>
      <div className="ms-2">{store.message}</div>
      <div className="me-2">{store.id}</div>

    </div>
  );
};

export default RegistroUsuario;
