import React from "react";
import { Sidebar } from "../component/sidebar";
import { Footer } from "../component/footer";
import StatusProfesional from "../component/StatusProfesional";
import { Datos_Perfil } from "../component/datos_perfil";

const PerfilProfesional = () => {
  return (
    <>
      <div className="container-flex">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <StatusProfesional />
            <h4 className="text-center m-5">carpeta con otra cosa</h4>
            <h4 className="text-center m-5">algo mas</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilProfesional;
