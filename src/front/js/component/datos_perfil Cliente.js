import React, { useState } from "react";
import "../../styles/datos_perfil.css";


export const Datos_Perfil_Cliente = () => {

  const [datos, setDatos] = useState({
    nombre: " ",
    apellido: ""
    // Dirreccion: " ",
    // Ciudad: " ",
    // Provincia:" ",
    // Telefono:" ",
    // ZipCode :" "
   });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.nombre]: event.target.value,[event.target.apellido]: event.target.value,
    });
  };
 
  const enviarDatos = (event) => {
    event.preventDefault();}
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
        {/* <div class="col-md-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={handleInputChange}
            name="Direccion"
             />
        </div>
        <div class="col-md-12">
          <label for="inputCity" class="form-label">
            Ciudad
          </label>
          <input type="text" class="form-control" id="Ciudad" placeholder="Ciudad" onChange={handleInputChange}
            name="Ciudad"
            />
        </div>
        <div class="col-md-12">
          <label for="inputProvincia" class="form-label" >
            Provincia
          </label>
          <input type="text" class="form-control" id="inputProvincia" placeholder="Provincia" name="Provincia"
             onChange={handleInputChange}/>
        </div>
        <div class="col-md-12">
          <label for="inputTelefono" class="form-label"  >
            Teléfono
          </label>
          <input type="telefono" class="form-control" id="inputTelefono" placeholder="Telefono" name="Telefono"
           onChange={handleInputChange} />
        </div>
        <div class="col-md-12">
          <label for="inputZip" class="form-label">
            Código postal
          </label>
          <input type="text" class="form-control" id="inputZip" placeholder="Codigo Postal" name="zipCode"
              required  onChange={handleInputChange} />
        </div>
        <div class="col-md-4"> */}
        <div>
          <button type="submit" onSubmit={enviarDatos} class="btn btn-primary">
                Guardar
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}; 
