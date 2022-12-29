import React from "react";
import {BiMap} from "react-icons/bi"

const BusquedaUbicacion = () => {
  return (
    <div className="container-fluid p-5 " style={{backgroundColor:"#d0f3c6"}}>
    <div className="container" style={{ width: "900px" }}>
      <div className="fs-3 text-center">Busca tu ubicación</div>
      <nav className="navbar" style={{backgroundColor:"#d0f3c6"}}>
        <form className="container-fluid">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="¿Cuál es tu ciudad?"
              aria-label="Ubicación"
            ></input>

            <button className="input-group-text" id="basic-addon1">
              <BiMap/>
            </button>
          </div>
        </form>
      </nav>
    </div>
    </div>
  );
};

export default BusquedaUbicacion;
