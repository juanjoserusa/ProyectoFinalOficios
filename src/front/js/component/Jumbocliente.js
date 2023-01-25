import React, { useContext, useEffect } from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/cliente.jpg";
import "../../styles/jumbo.css";
import DropdownHome from "/workspace/ProyectoFinalOficios/src/front/js/component/DropdownHome.js";

const JumboCliente = () => {
  return (
    <div className="card jumbocompleto text-bg-dark border border-0 d-flex justify-content-between">
      <div>
      <img src={background} className="card-img" alt="cliente" />

      </div>
      <div className="card-img-overlay">
        <div className="row">
          <div className="title ">
          <h3
              className="card-title  d-flex justify-content-center text-center mb-3 font-weight-bold"
              style={{ width: "800px" }}
            >
              ¿Avería en casa? ¿Remodelar el salón? ¿Problemas con la luz? ¿Montar ese armario que parece una misión imposible?
            </h3>
            <h5
              className="card-title  d-flex justify-content-center text-center"
              style={{ width: "800px" }}
            >
              Te ayudamos a encontrar la solucion a tus problemas del hogar.<br/>
              Solo debes seleccionar el tipo de oficio que estas buscando y
              nosotros te ayudamos a conectarte.
            </h5>
            {/* <h1 className="card-title  d-flex justify-content-center ">
              ¿Buscas un profesional para las reformas de tu hogar?
            </h1> */}
            <div className="mt-3 d-flex justify-content-center">
              <DropdownHome />
            </div>
            <h5
              className="card-title  d-flex justify-content-center text-center mt-5"
              style={{ width: "800px" }}
            >
              En HandleHome, los profesionales pueden encontrar clientes o particulares que requieran sus servicios de forma rápida y sencilla, sólo se deberán registrar en la App e indicar qué servicios ofrecen. 
            </h5>
            <h4
              className="card-title  d-flex justify-content-center text-center mt-2 font-weight-bold"
              style={{ width: "800px" }}
            >
               Podrán prestar sus servicios a miles de usuarios que los requieran
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCliente;
