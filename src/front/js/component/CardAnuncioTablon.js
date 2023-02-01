import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import fontanero from "../../assets/fontanero.png";
import carpintero from "../../assets/carpintero.png";
import electricista from "../../assets/electricista.png";
import albañil from "../../assets/albañil.png";
import "../../styles/card.css";

const CardAnuncioTablon = ({
  description,
  mail,
  profesion,
  codigoPostal,
  precio,
  id,
}) => {
  const { store, actions } = useContext(Context);
  const parametro = useParams();

  const token = store.token;

  return (
    <div className="col-1 card  cardanuncio ms-3 me-3 mb-3 bs -3">
      {`${profesion}` == "Fontanero" ? (
        <img className="imagenprofesion" src={fontanero} alt="Card image" />
      ) : (
        ""
      )}
      {`${profesion}` == "Carpintero" ? (
        <img className="imagenprofesion" src={carpintero} alt="Card image" />
      ) : (
        ""
      )}
      {`${profesion}` == "Electricista" ? (
        <img className="imagenprofesion" src={electricista} alt="Card image" />
      ) : (
        ""
      )}
      {`${profesion}` == "Albañil" ? (
        <img className="imagenprofesion" src={albañil} alt="Card image" />
      ) : (
        ""
      )}
      <div class="card-img3">
        <div className=" Anuncio">
          <h4 className="card-title tituloCard ">{profesion}</h4>

          <div className="datosCard">
            <div className="respuestafila">
              <h5 className="principiotabla">Nombre:</h5>
              <h5 className="finaltabla">{mail}</h5>
            </div>
            <div className="respuestafila">
              <h5 className="principiotabla">Codigo Postal:</h5>
              <h5 className="finaltabla">{codigoPostal}</h5>
            </div>
            <div className="respuestafila">
              <h5 className="principiotabla">Precio por hora : </h5>
              <h5 className="finaltabla">{precio}€</h5>
            </div>
          </div>

          <p className="card-text  anuncio">{description}</p>
        </div>
        <div className="botoncito">
          {token ? (
            <Link to={`/single/${id}`} className="btn btnMensaje">
              Enviar Mensaje
            </Link>
          ) : (
            <Link
              to={`/signup`}
              onClick={() =>
                swal(
                  "Oops!",
                  "Tienes que tener una cuenta registrada para poder enviar mensajes ",
                  "error"
                )
              }
              className="btn btnMensaje"
            >
              Enviar Mensaje
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAnuncioTablon;
