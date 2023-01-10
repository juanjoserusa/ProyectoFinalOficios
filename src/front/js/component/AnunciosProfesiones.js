import React, { useEffect, useState } from "react";
import CardAnuncioTablon from "./CardAnuncioTablon.js";

const AnunciosProfesiones = () => {

  const [datos, setDatos] = useState([])
  

  useEffect(() => {
      var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
      fetch("https://3001-juanjoserus-proyectofin-lp09obilmic.ws-eu81.gitpod.io/api/anuncios", requestOptions)
      .then(response => response.json())
      .then(result => {
        setDatos(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
      
  },[])

  


  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-5">
        {
          datos.map((element, index) => {
            return <CardAnuncioTablon key={index} description={element.description} mail={element.mail} />
          })
        }
        
      </div>
    </div>
  );
};

export default AnunciosProfesiones;
