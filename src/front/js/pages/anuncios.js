import React from "react";
import AnunciosProfesiones from "../component/AnunciosProfesiones";

import { BiMap } from "react-icons/bi";

export const Anuncios = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg p-4"
          style={{ backgroundColor: "#d0f3c6" }}
        >
          <div className="container-fluid" style={{ width: "1100px" }}>
            <form class="row gy-2 gx-3 align-items-center">
              <div class="col-auto">
                {/*    <label className="visually-hidden" for="autoSizingInput">
                Presupuesto
              </label> */}
                <div className="input-group">
                  <button className="btn btn-outline-success">
                    <BiMap />
                  </button>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Selecciona tu ciudad..."
                  ></input>
                </div>
              </div>
              <div className="col-auto">
                {/*   <label className="visually-hidden" for="autoSizingInputGroup">
                Username
              </label> */}
                <input
                  type="text"
                  class="form-control"
                  id="autoSizingInput"
                  placeholder="Elige tu presupuesto"
                ></input>
              </div>
              <div className="col-auto">
                <label className="visually-hidden" for="autoSizingSelect">
                  Preference
                </label>
                {/* <select className="form-select" id="autoSizingSelect">
                <option selected>Oficio</option>
                <option value="1">Carpintero</option>
                <option value="2">Electricista</option>
                <option value="3">Cerrajero</option>
              </select> */}
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  ></input>
                  <label className="form-check-label" for="autoSizingCheck">
                    Urgente
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <AnunciosProfesiones />
    </div>
  );
};
