import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "../../styles/dropdown.css"

const DropdownHome = () => {
  return (
    <Dropdown>

      <Dropdown.Toggle className="dropdown-boton btn-outline-success" >
        Elije un oficio


      </Dropdown.Toggle>
      <Dropdown.Menu className="text-center dropdown-menu1">
        <Dropdown.Item >
          <Link to="/profesiones/anuncios/fontanero" >Fontanero </Link>
        </Dropdown.Item>
        <Dropdown.Item >
        <Link to="/profesiones/anuncios/electricista" >Electricista </Link>
        </Dropdown.Item>
        <Dropdown.Item >
        <Link to="/profesiones/anuncios/albanil" >Albañil</Link>
        </Dropdown.Item>
        <Dropdown.Item >
        <Link to="/profesiones/anuncios/carpintero" >Carpintero</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHome;
