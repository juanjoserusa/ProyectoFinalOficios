import React, { useEffect, useState, useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Context } from "../store/appContext";

import MensajesClientes from "../component/MensajesClientes";
import { useParams } from "react-router-dom";
import { FormularioTrabajos } from "../component/FormularioTrabajos";
import TablaProfesional from "../component/TablaProfesional";
import "../../styles/formTrabajos.css"

const PerfilProfesional = () => {
  const parametros = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadMessage(parametros.id);
    actions.loadTabla(parametros.id);
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 tabCliente"
        fill
      >
        <Tab
          eventKey="home"
          title="Mensajes"
          className="mensajesRecibidos border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
              {store.mensajeCliente.map((element, index) => {
                return (
                  <MensajesClientes
                    key={index}
                    sender={element.sender}
                    subject={element.subject}
                    message={element.message}
                    id={element.user_id}
                  />
                );
              })}
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="profile"
          title="Presupuestos aceptados"
          className=" mensajesRecibidos border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="container ">
            
            <table className="table table-striped text-center">
              <tr>
                <th>Cliente</th>
                <th>Descripcion</th>
                <th>Precio por hora</th>
                <th>Horas de trabajo</th>
                <th>Dia</th>
                <th>Mes</th>
                <th>Año</th>
              </tr>

              {store.trabajosRecibidos.map((element, index) => {
                return (
                  <TablaProfesional
                    key={index}
                    cliente={element.cliente}
                    descripcion={element.descripcion}
                    precio={element.precio}
                    horas={element.horas}
                    dia={element.dia}
                    mes={element.mes}
                    anio={element.anio}
                    
                  />
                );
              })}
            </table>
            
            <div className="formularioTrabajos sticky-top">
              <FormularioTrabajos user_id={parametros.id} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PerfilProfesional;
