import React, { useContext }   from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";



const CardAnuncioTablon = ({description, mail, profesion, codigoPostal, precio, id}) => {

  const { store, actions } = useContext(Context);

  const token = store.token;

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
 {token ? <Link to={`/single/${id}`} >
          Enviar Mensaje
      </Link> : <Link to={`/login`} >
          Enviar Mensaje
      </Link> }
      
      
    </div>
  </div>

  );
};

export default CardAnuncioTablon;
