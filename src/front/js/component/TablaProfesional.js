import React from "react";
import "/workspace/ProyectoFinalOficios/src/front/styles/tablaProfesional.css";

const TablaProfesional = ({ cliente, descripcion }) => {
  return (
    <tr>
      <td>{cliente}</td>
      <td>{descripcion}</td>
    </tr>
  );
};

export default TablaProfesional;
