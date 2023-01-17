import React from "react";
import AnunciosProfesiones from "../component/AnunciosProfesiones";
import { Searchbar } from "./searchbar";

export const Anuncios = () => {
  return (
    <div>
      <Searchbar/>
    
      <AnunciosProfesiones />
    </div>
  );
};
