import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "/workspace/ProyectoFinalOficios/src/front/styles/dropdown.css"

const DropdownHome = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown-boton" >
        Elije un oficio
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-center dropdown-menu1">
        <Dropdown.Item href="/profesiones/anuncios/fontanero hover1">
          Fontanero
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/electricista hover1">
          Electricista
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/albanil hover1">
          Albañil
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/carpintero hover1">
          Carpintero
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHome;
