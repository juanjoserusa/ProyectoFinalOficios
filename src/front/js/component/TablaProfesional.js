import React from "react";
import "/workspace/ProyectoFinalOficios/src/front/styles/tablaProfesional.css";

const TablaProfesional = ({ cliente, descripcion, precio, horas, dia, mes, anio }) => {
  return (
    <tr>
      <td>{cliente}</td>
      <td>{descripcion}</td>
      <td>{precio} €</td>
      <td>{horas}</td>
      <td>{dia}</td>
      <td>{mes}</td>
      <td>{anio}</td>
    </tr>
  );
};

export default TablaProfesional;
