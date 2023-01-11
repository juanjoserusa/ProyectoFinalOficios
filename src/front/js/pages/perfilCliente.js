import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Footer } from "../component/footer";

import MensajesClientes from "../component/MensajesClientes";

export const PerfilCliente = () => {

    return(
        <>
        <div className="container mt-5">
        <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3 tabCliente"
      fill
    >
        <Tab eventKey="home" title="Mensajes" className="mensajesRecibidos border border-top-0" style={{ height: "600px" }}>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 "> 
        <MensajesClientes />
        <MensajesClientes />
        <MensajesClientes />
        <MensajesClientes />
            </div>
            </div>
      </Tab>
      <Tab eventKey="profile" title="Presupuestos aceptados" className=" mensajesRecibidos border border-top-0" style={{ height: "600px" }}>
      <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
        <MensajesClientes />
        </div>
        </div>
      </Tab>
      </Tabs>
      </div><Footer />
        </>
    )
}
