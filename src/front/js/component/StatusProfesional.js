import React, { useEffect, useState, useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MensajesClientes from "../component/MensajesClientes";
import { Context } from"../store/appContext"
import { useParams } from "react-router-dom";
import FormularioTrabajosAceptados from "./FormularioTrabajosAceptados";

const StatusProfesional = () => {

  
  const {store,actions}= useContext(Context)
  const parametros = useParams()

  useEffect(() => {
    console.log(parametros.id)
    actions.loadMessage(parametros.id)
  },[])




  return (
    <div className="container" style={{ height: "600px" }}>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        fill
        style={{ backgroundColor: "#D0F3C6" }}
      >
        <Tab
          eventKey="mensaje"
          title="Mensaje"
          className="border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="p-5">
          {
              store.mensajeCliente.map((element, index) => {
                return <MensajesClientes key={index}  sender={element.sender} subject={element.subject} message={element.message} id={element.user_id} />
              })
            }
            
          
          </div>
        </Tab>
        <Tab
          eventKey="presupuestos aceptados"
          title="Presupuestos Aceptados"
          className="border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="p-5">
            <FormularioTrabajosAceptados />
          </div>
        </Tab>

        <Tab
          eventKey="trabajos realizados"
          title="Trabajos Realizados"
          className="border border-top-0"
          style={{ height: "600px" }}
        >
          <div className="p-5">
            Presupuestos Aceptado 1 Presupuestos Aceptado 2 Presupuestos
            Aceptado 3 Presupuestos Aceptado 4 Presupuestos Aceptado 5
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default StatusProfesional;
