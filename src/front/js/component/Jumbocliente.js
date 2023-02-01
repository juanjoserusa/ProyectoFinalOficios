import React from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/familia.png";
import "../../styles/jumbo.css";
import DropdownHome from "/workspace/ProyectoFinalOficios/src/front/js/component/DropdownHome.js";

const JumboCliente = () => {
  return (
    <div className="container-fluid jumbotron mt-5">
      <div className="row d-flex justify-content-between">
        
          <div className="col text-center coljumbo1 ms-5">
            <div className="title titlejumbo">
              <h3 className="card-title  mb-3 font-weight-bold">
                ¿Avería en casa? ¿Remodelar el salón? ¿Problemas con la luz?
                ¿Montar ese armario que parece una misión imposible?
              </h3>
              {/* <h5 className="card-title">
                Te ayudamos a encontrar la solucion a tus problemas del hogar.
                <br />
                Solo debes seleccionar el tipo de oficio que estas buscando y
                nosotros te ayudamos a conectarte.
              </h5> */}

              {/* <div className="mt-3 ">
                <DropdownHome />
              </div> */}
              
              </div>
            </div>
            <div className="divImage col coljumbo2 ">
          <img src={background} className=" imagenjumbo" alt="cliente" />
        </div>
          </div>
        </div>
     
    
  );
};

export default JumboCliente;
