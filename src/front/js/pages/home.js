import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import "../../styles/descriptionHome.css";

import JumboCliente from "../component/Jumbocliente";
import RegistroUsuario from "./registroUsuario";
import JumboProfesional from "../component/JumboProfesional";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-flex pagehome">
      <RegistroUsuario />

      <JumboCliente />
      {/* <JumboProfesional /> */}
      <div className="espaciofooter"></div>
      
      <section className=" py-5 description">
        <div className="container-flex">
          <div className="row d-flex justify-content-around columnasdescription">
            <div className="col-3 col-md-3 cardsDescription  d-flex justify-content-center">
              <div className="icon mb-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  fill="currentColor"
                  className="bi bi-tools"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                </svg>
              </div>
              <div className="ms-5">
                <h3 className="titledescription text-center">Profesionales</h3>

                <p className=" mb-6 parrafoDescription">
                  Los profesionales pueden encontrar clientes o particulares que
                  requieran sus servicios de forma rápida y sencilla, sólo se
                  deberán registrarse e indicar qué servicios ofrecen.
                </p>
              </div>
            </div>
            <div className="col-3 col-md-3 cardsDescription  d-flex justify-content-center">
              <div className="icon mb-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <div className="ms-5">
                <h3 className="titledescription text-center">Mensajeria</h3>

                <p className=" mb-6 parrafoDescription">
                  Los clientes o particulares podran leer los anuncios y
                  contactar de forma directa con el profesional que necesite,
                  directamente desde nuestra web, de forma intuitiva y facil.
                </p>
              </div>
            </div>
            <div className="col-3 col-md-3 cardsDescription  d-flex justify-content-center">
              <div className="icon mb-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  fill="currentColor"
                  class="bi bi-journal-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
              </div>
              <div className="ms-5">
                <h3 className="titledescription text-center">Agenda</h3>

                <p className=" mb-6 parrafoDescription">
                  Los profesionales pueden llevar un registro de cuantos
                  trabajos han aceptado y los beneficios de estos en su propia
                  agenda laboral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="espaciofooter"></div>
    </div>
  );
};
