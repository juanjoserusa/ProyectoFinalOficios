import React from "react";
import BusquedaUbicacion from "../component/BusquedaUbicacion";
import ProfesionesCards from "../component/ProfesionesCards";
import { Footer } from "../component/footer";

export const Profesiones = () => {
  return (
   <>
    <div>
      <BusquedaUbicacion />
      <ProfesionesCards />
    </div><Footer />
   </>

  );
};
