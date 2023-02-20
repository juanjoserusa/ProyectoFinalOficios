import React from "react";
import "../../styles/tablaProfesional.css";

const TablaProfesional = ({
  cliente,
  descripcion,
  precio,
  horas,
  dia,
  mes,
  anio,
}) => {
  return (
    <tr >
      <td className="fecha">{dia}</td>
      <td className="fecha">{mes}</td>
      <td className="fecha">{anio}</td>
      <td className="tabla-body">{cliente}</td>
      <td className="tabla-body">{descripcion}</td>
      <td className="tabla-body">{precio} €</td>
      <td className="tabla-body">{horas}</td>
      <td className="tabla-body">{(precio*horas)}</td>
    </tr>
  );
};

export default TablaProfesional;
