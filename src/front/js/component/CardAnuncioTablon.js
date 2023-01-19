import React from "react";
import { Link } from "react-router-dom";



const CardAnuncioTablon = ({description, mail, profesion, codigoPostal, precio, id}) => {
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
      <Link to={`/single/${id}`} >
          Enviar Mensaje
      </Link>
      
    </div>
  </div>

  );
};

export default CardAnuncioTablon;
