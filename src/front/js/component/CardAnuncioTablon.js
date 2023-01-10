import React from "react";
import ModalProfesiones from "./ModalProfesiones";


const CardAnuncioTablon = ({description, mail, profesion, codigoPostal, precio}) => {
  return (

    <div className="col-2 card m-2" style={{ backgroundColor: "#ffface" }}>
    <div className="card-body cardAnuncio">
      <h5 className="card-title tituloCard">{profesion}</h5>
      <p className="card-text text-dark anuncio">
      {description}
      </p>
      
  <ul className="datosCard">
    <li>{mail}</li>
    <li>{codigoPostal}</li>
    <li>{precio}</li>
  </ul>
  
      <ModalProfesiones />
    </div>
  </div>

  );
};

export default CardAnuncioTablon;
