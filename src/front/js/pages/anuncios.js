import React from "react";
import AnunciosProfesiones from "../component/AnunciosProfesiones";
import FiltrosAnuncios from "../component/FiltrosAnuncios";
import { Footer } from "../component/footer";

export const Anuncios = () => {
  return (
    <>
    <div>
      <FiltrosAnuncios />
      <AnunciosProfesiones />
    </div>
    <Footer />
    </>
  );
};
