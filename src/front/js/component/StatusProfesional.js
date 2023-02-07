import React, { useEffect, useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MensajesClientes from "../component/MensajesClientes";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const StatusProfesional = () => {
  const { store, actions } = useContext(Context);
  const parametros = useParams();

  useEffect(() => {
    console.log(parametros.id);
    actions.loadMessage(parametros.id);
  }, []);

  return (
    <div className="container">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        fill

      >
        <Tab eventKey="mensaje" title="Mensaje" className="border border-top-0">
          <div className="p-5">
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
        </Tab>

      </Tabs>
    </div>
  );
};

export default StatusProfesional;
