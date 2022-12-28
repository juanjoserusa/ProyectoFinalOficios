import React from "react";
import background2 from "/workspace/ProyectoFinalOficios/src/front/img/profesional.jpg";
import "../../styles/jumbo.css";

const JumboProfesional = () => {

    return(
        <div className="card text-bg-dark border border-0">
          <img src={background2} className="card-img2" alt="profesional" />
            <div className="card-img-overlay">
              <div className="row">
                <div className="title col-6 ">
                  <h1 className="card-title oficios ">¿Quieres ofrecer tus servicios?</h1>
                </div>
              <div className="col-3">
                <button type="button " class="btn btn-primary btn-lg btnLoginProfesional">Register</button> 
              </div>
              <div className="col-3">
                <button type="button " class="btn btn-primary btn-lg btnLoginProfesional">Login</button> 
              </div>
              </div>
            </div>  
        </div>



    
        );
      }
  

      export default JumboProfesional