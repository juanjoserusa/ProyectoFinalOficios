import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownHome = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ width: "800px", backgroundColor: "#04a97c" }}
      >
        Elije un oficio
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="text-center"
        style={{ width: "800px", backgroundColor: "#fcf5aa" }}
      >
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
