import React, { useContext, useEffect } from "react";

import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

const RegistroUsuario = () => {
  const { store, actions } = useContext(Context);
  const token = store.token;

  useEffect(() => {
    if (token && token != "" && token != undefined) actions.getMessage();
  }, [token]);

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-end ">
      <div className="me-3">{store.email}</div>
      <div className="me-3">{store.message}</div>
      <div className="me-3">{store.id}</div>
    </nav>
  );
};

export default RegistroUsuario;
