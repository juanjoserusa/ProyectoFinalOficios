import React, { useEffect, useState, useContext } from "react";
import CardAnuncioTablon from "./CardAnuncioTablon.js";
import { Context } from"../store/appContext"

const AnunciosProfesiones = () => {

  const [datos, setDatos] = useState([])
  const {store,actions}= useContext(Context)

  useEffect(() => {
    actions.loadAnnounces()
  },[])

  


  return (
    <div className="container-fluid ">
      <div className="row d-flex justify-content-center  mt-5 mb-5">
        {
          store.search.map((element, index) => {
            return <CardAnuncioTablon key={index} description={element.description} mail={element.mail} codigoPostal={element.zipcode} precio={element.price} profesion={element.profession} id={element.user_id} />
          })
        }  
      </div>
    </div>
  );
};

export default AnunciosProfesiones;
