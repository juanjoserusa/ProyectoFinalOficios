import React from "react";
import "../../styles/datos_perfil.css";

export const Datos_Perfil = () => {
  return (
    <div className="container_form" id="form_registro">
      <div className="titulo">
        {" "}
        <hi> Mi Perfil </hi>{" "}
      </div>
      <form class="row-8 justify-content-evenly ">
        <div class="col-md-12">
          <label for="inputName" class="form-label">
            Nombre
          </label>
          <input type="text" class="form-control" id="inputName" />
        </div>
        <div class="col-md-12">
          <label for="inputapellido" class="form-label">
            Apellido
          </label>
          <input type="text" class="form-control" id="inputApellido" />
        </div>
        <div class="col-md-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">
            Ciudad
          </label>
          <input type="text" class="form-control" id="Ciudad" placeholder="" />
        </div>
        <div class="col-md-12">
          <label for="inputProvincia" class="form-label">
            Provincia
          </label>
          <input type="text" class="form-control" id="inputProvincia" />
        </div>
        <div class="col-md-12">
          <label for="inputTelefono" class="form-label">
            Telefono
          </label>
          <input type="text" class="form-control" id="inputTelefono" />
        </div>
        <div class="col-md-12">
          <label for="inputZip" class="form-label">
            Código postal
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-md-4">
          <label for="inputProfesion" class="form-label">
            Profesion
          </label>
          <select id="inpuProfesion" className="form-select">
            <option selected>Elige...</option>
            <option>...</option>
          </select>
          <div>
            <button type="submit" class="btn btn-primary">
                  Guardar
            </button>
         </div>
        </div>
      </form>
    </div>
  );
};
