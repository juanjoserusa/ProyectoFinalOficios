import React from "react";
import ModalProfesiones from "./ModalProfesiones";


const CardAnuncioTablon = () => {
  return (

      <div className="col-2 card m-2" style={{ backgroundColor: "#ffface" }}>
        <div className="card-body">
          <h5 className="card-title">Carpintero 1</h5>
          <p className="card-text text-dark">
            Me especializo en Carpinteria, mi especialidad son los muebles de
            cocina.
          </p>
          <ModalProfesiones />
        </div>
      </div>

  );
};

export default CardAnuncioTablon;
