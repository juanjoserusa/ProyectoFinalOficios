import React, { useEffect, useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Context } from "../store/appContext";

import MensajesClientes from "../component/MensajesClientes";
import { useParams } from "react-router-dom";
import { FormularioTrabajos } from "../component/FormularioTrabajos";
import TablaProfesional from "../component/TablaProfesional";

import "/workspace/ProyectoFinalOficios/src/front/styles/tablaProfesional.css";

import "../../styles/formTrabajos.css"

const PerfilProfesional = () => {
  const parametros = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadMessage(parametros.id);
    actions.loadTabla(parametros.id);
  }, []);

  return (
    <div className="container perfilprofesionalpage">
      <div className="mt-5 mb-5">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 tabCliente  "
        fill
      >
        <Tab
          eventKey="home"
          title="Mensajes"
          className="mensajesRecibidos border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-3 d-flex justify-content-center  columnasdemensajes">
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
        >

          <div className="container">
      
              <div className="scroll-tabla">
              <table className="text-center tabla-profesiones striped bordered hover">
                <tr>
                  <th className="fecha uno">Dia</th>
                  <th className="fecha uno">Mes</th>
                  <th className="fecha uno">Año</th>
                  <th className="table-head uno">Cliente</th>
                  <th className="table-head uno">Descripcion</th>
                  <th className="fecha uno">Precio por hora</th>
                  <th className="fecha uno">Horas de trabajo</th>
                  <th className="table-head1 uno">Presupuesto estimado</th>
                </tr>

                {store.trabajosRecibidos.map((element, index) => {
                  return (
                    <TablaProfesional
                      key={index}
                      dia={element.dia}
                      mes={element.mes}
                      anio={element.anio}
                      cliente={element.cliente}
                      descripcion={element.descripcion}
                      precio={element.precio}
                      horas={element.horas}
                    />
                  );
                })}
              </table>
              </div>

            
            <div className="formularioTrabajos fixed">
              <FormularioTrabajos user_id={parametros.id} />

            </div>
          </div>
         
        </Tab>
      </Tabs>
      </div>
    </div>
  );
};

export default PerfilProfesional;
