import AnunciosProfesiones from "../component/AnunciosProfesiones";

import { Searchbar } from "./searchbar";

import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { BiMap } from "react-icons/bi";


export const Anuncios = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const {actions} = useContext(Context)
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify({
        query: query
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(results => {
        setResults(results);
      });
  };
  return (
    <div>

      <Searchbar/>
    

     
      <AnunciosProfesiones />
    </div>
  );
};
