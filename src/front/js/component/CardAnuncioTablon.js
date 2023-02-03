import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import fontanero from "../../assets/tuberia.png";
import carpintero from "../../assets/carpintero.png";
import electricista from "../../assets/electricista.png";
import chincheta from "../../assets/chincheta.png";
import albañil from "../../assets/albañil.png";
import "../../styles/card.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

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


  var cp_provincias = {
    1: "\u00C1lava",
    2: "Albacete",
    3: "Alicante",
    4: "Almer\u00EDa",
    5: "\u00C1vila",
    6: "Badajoz",
    7: "Baleares",
    8: "Barcelona",
    9: "Burgos",
    10: "C\u00E1ceres",
    11: "C\u00E1diz",
    12: "Castell\u00F3n",
    13: "Ciudad Real",
    14: "C\u00F3rdoba",
    15: "Coruña",
    16: "Cuenca",
    17: "Gerona",
    18: "Granada",
    19: "Guadalajara",
    20: "Guip\u00FAzcoa",
    21: "Huelva",
    22: "Huesca",
    23: "Ja\u00E9n",
    24: "Le\u00F3n",
    25: "L\u00E9rida",
    26: "La Rioja",
    27: "Lugo",
    28: "Madrid",
    29: "M\u00E1laga",
    30: "Murcia",
    31: "Navarra",
    32: "Orense",
    33: "Asturias",
    34: "Palencia",
    35: "Las Palmas",
    36: "Pontevedra",
    37: "Salamanca",
    38: "Santa Cruz de Tenerife",
    39: "Cantabria",
    40: "Segovia",
    41: "Sevilla",
    42: "Soria",
    43: "Tarragona",
    44: "Teruel",
    45: "Toledo",
    46: "Valencia",
    47: "Valladolid",
    48: "Vizcaya",
    49: "Zamora",
    50: "Zaragoza",
    51: "Ceuta",
    52: "Melilla"
  };





  return (
    <MDBCol className="mt-5 mb-2">
      
<MDBCard style={{ maxWidth: '540px'}} className="cardpostit mb-3">
    <MDBRow className='g-0'>
        <MDBCardImage src={chincheta} alt=".." className="chincheta" />
        </MDBRow> 
        <MDBRow className='g-0'>
        <MDBCol md='4'>
          <div><iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12681.497860807069!2d-6.01035405!3d37.380975649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c6ac499fde3%3A0x1c046400c8a750c0!2s${codigoPostal}%20Madrid!5e0!3m2!1ses!2ses!4v1675429437730!5m2!1ses!2ses`}
          className='w-100 fotoprofesion'
          height='200'
          loading='lazy'
        ></iframe>
           {/* {`${profesion}` == "Fontanero" ? (
        <MDBCardImage src={fontanero}  alt='Fontanero' fluid  className="fotoprofesion"/>
      ) : (
        ""
      )}
      {`${profesion}` == "Carpintero" ? (
        <MDBCardImage src={carpintero}  alt='Carpintero' fluid className="fotoprofesion"/>
      ) : (
        ""
      )}
      {`${profesion}` == "Electricista" ? (
        <MDBCardImage src={electricista}  alt='Electricista' fluid />
      ) : (
        ""
      )}
      {`${profesion}` == "Albañil" ? (
        <MDBCardImage src={albañil}  alt='Albañil' fluid />
      ) : (
        ""
      )}  */}
      </div>
          {/* <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid /> */}
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody className="cardbodyanunciosaver">
            <MDBCardTitle>{profesion}</MDBCardTitle>
            <MDBCardText className="comolaa">
              {description}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{mail}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
     <MDBRow>
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
      </MDBRow> 
    </MDBCard>
    </MDBCol>
  



  );
};

export default CardAnuncioTablon;
