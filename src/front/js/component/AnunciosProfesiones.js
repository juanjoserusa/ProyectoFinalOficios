import React, { useEffect, useState, useContext } from "react";
import CardAnuncioTablon from "./CardAnuncioTablon.js";
import { Context } from"../store/appContext"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import corcho from "../../assets/corcho2.jpg";

const AnunciosProfesiones = () => {

  const [datos, setDatos] = useState([])
  const {store,actions}= useContext(Context)

  useEffect(() => {
    actions.loadAnnounces()
  },[])

  


  return (
    
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 container-fluid d-flex justify-content-center carouserCards mt-5 mb-5  text-center' >
  
 
        {
          store.search.map((element, index) => {
            return <CardAnuncioTablon key={index} description={element.description} mail={element.mail} codigoPostal={element.zipcode} precio={element.price} profesion={element.profession} id={element.user_id} />
          })
        } 
       
     
    </MDBRow>
    
  );
};

export default AnunciosProfesiones;
