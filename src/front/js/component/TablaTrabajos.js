import React from "react";
import "/workspace/ProyectoFinalOficios/src/front/styles/tablaTrabajos.css"


const TablaTrabajos= () => {
  return (
    <>
      <table className="tablaHoras table table-striped">
        <thead className="fuenteTitle">
          <tr>
            <th>Fecha</th>
            <th>Trabajo para</th>
            <th>Precio por hora</th>
            <th>Descripción</th>
            <th>Horas de Trabajo</th>
            <th>Presupuesto estimado *</th>
          </tr>
        </thead>
        <tbody >
          <tr >
            <td >Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Jacob</td>
          </tr>
        </tbody>
      </table>
      <p>* Se realiza un estimado multiplicando el precio por hora y la cantidad de horas de trabajo.</p> 

    </>
  );
};

export default TablaTrabajos;
