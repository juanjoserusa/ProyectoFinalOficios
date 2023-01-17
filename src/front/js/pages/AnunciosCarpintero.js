import React, { useEffect, useState } from "react";

import CardAnuncioTablon from "../component/CardAnuncioTablon";

import { Searchbar } from "./searchbar";

const AnunciosCarpintero = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND_URL + "/api/anuncios", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDatos(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
        <Searchbar/>
    <div className="container ">
   

      <div className="row d-flex justify-content-center mt-5">
        {datos.map((element, index) => {
          if (element.profession === "Carpintero") {
            return (
              <CardAnuncioTablon
                key={index}
                description={element.description}
                mail={element.mail}
                codigoPostal={element.zipcode}
                precio={element.price}
                profesion={element.profession}
                id={element.user_id}
              />
            );
          }
        })}
      </div>
    </div>
    </div>
  );
};

export default AnunciosCarpintero;