import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "/workspace/ProyectoFinalOficios/src/front/styles/dropdown.css"

const DropdownHome = () => {
  return (
    <Dropdown>

      <Dropdown.Toggle className="dropdown-boton btn-outline-success" >
        Elije un oficio


      </Dropdown.Toggle>
      <Dropdown.Menu className="text-center dropdown-menu1">
        <Dropdown.Item href="/profesiones/anuncios/fontanero">
          Fontanero
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/electricista">
          Electricista
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/albanil">
          Albañil
        </Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios/carpintero">
          Carpintero
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHome;
