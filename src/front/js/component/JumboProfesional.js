import React, { useContext, useEffect } from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/familia.png";
import "../../styles/jumbopro.css";
import DropdownHome from "/workspace/ProyectoFinalOficios/src/front/js/component/DropdownHome.js";

const JumboCliente = () => {
  return (
    <div className="container jumbotron mt-5">
      <div className="row d-flex justify-content-evenly">
      <div className="divImage col coljumbo">
          <img src={background} className=" imagenjumbo" alt="cliente" />
        </div>
          
          <div className="col text-center coljumbo mt-5">
            <div className="title titlejumbo">
              <h5 className="card-title mt-5">
                En HandleHome, los profesionales pueden encontrar clientes o
                particulares que requieran sus servicios de forma rápida y
                sencilla, sólo se deberán registrar en la App e indicar qué
                servicios ofrecen.
              </h5>
              <h4 className="card-title  mt-2 font-weight-bold">
                Podrán prestar sus servicios a miles de usuarios que los
                requieran
              </h4>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};

export default JumboCliente;
