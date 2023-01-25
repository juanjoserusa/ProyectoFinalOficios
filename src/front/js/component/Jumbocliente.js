import React, { useContext, useEffect } from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/cliente.jpg";
import "../../styles/jumbo.css";
import DropdownHome from "/workspace/ProyectoFinalOficios/src/front/js/component/DropdownHome.js";

const JumboCliente = () => {
  return (
    <div className="card text-bg-dark border border-0">
      <img src={background} className="card-img" alt="cliente" />

      <div className="card-img-overlay">
        <div className="row">
          <div className="title ">
            <h5
              className="card-title  d-flex justify-content-center text-center"
              style={{ width: "800px" }}
            >
              Te ayudamos a encontrar la solucion a tus problemas del hogar.
              Solo debes seleccionar el tipo de oficio que estas buscando y
              nosotros te ayudamos a conectarte
            </h5>
            <h1 className="card-title  d-flex justify-content-center ">
              ¿Buscas un profesional?
            </h1>
            <div className="mt-5 d-flex justify-content-center">
              <DropdownHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCliente;
