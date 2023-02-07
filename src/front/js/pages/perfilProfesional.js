
import React, { useEffect, useContext, useState  } from "react";

import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import  PaginacompletarPerfil from '../pages/PaginacompletarPerfil';
import { FormularioTrabajos } from '../component/FormularioTrabajos';
import TablaProfesional from '../component/TablaProfesional';
import MensajesClientes from "../component/MensajesClientes";

const PerfilProfesional = () => {
  const parametros = useParams();
  const { store, actions } = useContext(Context);
  

  useEffect(() => {
    actions.loadMessage(parametros.id);
    actions.loadTabla(parametros.id);
  }, []);

  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  
  return (
    <div className="container-fluid mt-3 mb-3">
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs pills className='flex-column text-center '>
            <MDBTabsItem >
              <MDBTabsLink className="tabperfilpro" onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Perfil
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className="tabperfilpro" onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Mensajes
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem >
              <MDBTabsLink className="tabperfilpro" onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'} >
                Historico  ganancias
              </MDBTabsLink>
            </MDBTabsItem>
            {/* <MDBTabsItem>
              <MDBTabsLink className="tabperfilpro" onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                Anuncios publicados
              </MDBTabsLink>
            </MDBTabsItem> */}
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>
            <div className="container">
              <PaginacompletarPerfil />
            </div>
            
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>
              <div className="container">
              <MDBRow className='row-cols-1 row-cols-md-2 g-4 container-fluid d-flex justify-content-center carouserCards text-center'>
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
            </MDBRow>
          </div>
          </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>
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
            </MDBTabsPane>
            {/* <MDBTabsPane show={verticalActive === 'tab4'}>
            <div className="container">
            
            </div>
            
            </MDBTabsPane> */}
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>

        </div>
  );
};

export default PerfilProfesional;
