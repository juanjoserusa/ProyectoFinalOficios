import React, { useContext }   from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import "../../styles/card.css"


const CardAnuncioTablon = ({description, mail, profesion, codigoPostal, precio, id}) => {

  const { store, actions } = useContext(Context);
  const parametro = useParams()

  const token = store.token;

  return (

    <div className="col-1 card m-2 cardanuncio">
    <div className="card-body Anuncio" >
      <h4 className="card-title tituloCard ">{profesion}</h4>
      
      
      
  <div className="datosCard">
    <div className="respuestafila"><h5 className="principiotabla">Nombre:</h5><h5 className="finaltabla">{mail}</h5></div>
    <div className="respuestafila"><h5 className="principiotabla">Codigo Postal:</h5><h5 className="finaltabla">{codigoPostal}</h5></div>
    <div className="respuestafila"><h5 className="principiotabla">Precio por hora : </h5><h5 className="finaltabla">{precio}€</h5></div>
  </div>

  <p className="card-text  anuncio">
      {description}
      </p>

      
      
    </div>
    {token ? <Link to={`/single/${id}`}  className="btn btnMensaje">
          Enviar Mensaje
      </Link> : <Link to={`/signup`}  className="btn btnMensajeSignup">
          Registrate para poder enviar un mensaje
      </Link>}
  </div>

  );
};

export default CardAnuncioTablon;
