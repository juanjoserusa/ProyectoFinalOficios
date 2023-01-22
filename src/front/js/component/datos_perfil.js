import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/datos_perfil.css";


export const Datos_Perfil = () => {

  const [formDatos, setFormDatos] = useState({
    nombre: "",
    apellido: ""
   });

  const handleInputChange = (event) => {
    setFormDatos({
      ...formDatos,
      [event.target.nombre]: event.target.value,
    });
  };
 
  const enviarDatos = (event) => {
    event.preventDefault();
    saveFormData(formDatos);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
      
   var raw = JSON.stringify(datos);
  
   var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(process.env.BACKEND_URL + "/api/datosperfil", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  
  }
  return (
    <>
    <div className="container_form" id="form_registro">
      <div className="titulo">
        <hi> Mi Perfil </hi>
      </div>
      <form class="row-8 justify-content-evenly ">
        <div class="col-md-12">
          <label for="inputName" class="form-label">
            Nombre
          </label>
          <input type="Nombre" class="form-control" id="inputName"  onChange={handleInputChange}
              name="Nombre"
               />
        </div>
        <div class="col-md-12">
          <label for="inputapellido" class="form-label">
            Apellido
          </label>
          <input type="text" class="form-control" id="inputApellido" onChange={handleInputChange}
              name="Apellido"
                />
        </div>
         <div class="col-md-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="calle ,número, dpto."
            name="Direccion"
             />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">
            Ciudad
          </label>
          <input type="text" class="form-control" id="Ciudad" placeholder="Ciudad" 
            name="Ciudad"
            />
        </div>
        <div class="col-md-12">
          <label for="inputProvincia" class="form-label" >
            Provincia
          </label>
          <input type="text" class="form-control" id="inputProvincia" placeholder="Provincia" name="Provincia"
             />
        </div>
        <div class="col-md-12">
          <label for="inputTelefono" class="form-label"  >
            Teléfono
          </label>
          <input type="telefono" class="form-control" id="inputTelefono" placeholder="Telefono" name="Telefono"
            />
        </div>
        <div class="col-md-12">
          <label for="inputZip" class="form-label">
            Código postal
          </label>
          <input type="text" class="form-control" id="inputZip" placeholder="Codigo Postal" name="zipCode"
               />
        </div>
        <div class="col-md-4">
        <div>
          <button type="submit" onSubmit={enviarDatos} class="btn btn-primary">
                Guardar
          </button>
        </div>
        </div>
      </form>
    </div>
    </>
  
  );
};  