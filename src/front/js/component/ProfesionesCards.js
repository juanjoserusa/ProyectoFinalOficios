import React from "react";
import carpintero from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Carpenter.png";
import conditioning from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/conditioning.png";
import electricity from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Electricity.png";
import furniture from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Furniture.png";
import mechanic from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Mechanic.png";
import painter from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Painter.png";
import plumber from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Plumber.png";
import repairman from "/workspace/ProyectoFinalOficios/src/front/assets/ProfesionesCards/Repairman.png";

const ProfesionesCards = () => {
  return (
    <div className="container d-flex justify-content-center">
       
   
      <div className="card-group container m-5  d-flex justify-content-center" style={{ width: "1100px" }}>
    {/*   <div className="fs-2 ">PROFESIONES</div> */}
    
        <div className="row">
          <div className="col">
            <div className="card-body">
              <img
                src={conditioning}
                className="card-img-top"
                alt="conditioning"
              ></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img src={plumber} className="card-img-top" alt="plumber"></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img
                src={furniture}
                className="card-img-top"
                alt="furniture"
              ></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img src={painter} className="card-img-top" alt="painter"></img>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card-body">
              <img
                src={electricity}
                className="card-img-top"
                alt="electricity"
              ></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img
                src={repairman}
                className="card-img-top"
                alt="repairman"
              ></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img src={mechanic} className="card-img-top" alt="mechanic"></img>
            </div>
          </div>

          <div className="col">
            <div className="card-body">
              <img
                src={carpintero}
                className="card-img-top"
                alt="carpintero"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionesCards;
