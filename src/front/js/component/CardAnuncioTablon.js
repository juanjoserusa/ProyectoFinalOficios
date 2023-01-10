import React from "react";
import ModalProfesiones from "./ModalProfesiones";


const CardAnuncioTablon = ({description, mail}) => {
  return (

      <div className="col-2 card m-2" style={{ backgroundColor: "#ffface" }}>
        <div className="card-body">
          <h5 className="card-title">{mail}</h5>
          <p className="card-text text-dark">
            {description}
          </p>
          <ModalProfesiones />
        </div>
      </div>

  );
};

export default CardAnuncioTablon;
