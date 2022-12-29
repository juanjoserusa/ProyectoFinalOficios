import React from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/cliente.jpg";
import "../../styles/jumbo.css";

const JumboCliente = () => {

    return(
        <div className="card text-bg-dark border border-0">
  <img src={background} className="card-img" alt="cliente" />
  <div className="card-img-overlay">
    <div className="row">
      <div className="title ">
    <h1 className="card-title  d-flex justify-content-center ">¿Buscas un profesional?</h1>

    <div className="mt-5 d-flex justify-content-center">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div className="mt-5 d-flex justify-content-center">
    <button type="button " class="btn btn-primary btn-lg btnLoginCliente">Login</button> 
    </div>
    
    </div>
    
  </div>  
  
  </div>
</div>


    
        );
      }
  

      export default JumboCliente