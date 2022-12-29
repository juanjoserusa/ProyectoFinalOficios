import React from "react";
import AnunciosProfesiones from "../component/AnunciosProfesiones";
import FiltrosAnuncios from "../component/FiltrosAnuncios";

export const Anuncios = () => {
  return (
    <div>
      <FiltrosAnuncios />
      <AnunciosProfesiones />
    </div>
  );
};
