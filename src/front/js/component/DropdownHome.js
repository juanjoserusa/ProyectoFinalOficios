import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const DropdownHome = () => {
    



  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ width: "800px", backgroundColor:"#04a97c" }}
      >
        Elije un oficio
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-center" style={{width:"800px", backgroundColor:"#fcf5aa"}}>
   
        <Dropdown.Item href="/profesiones/anuncios">Fontanero</Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios">Electricista</Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios">Albañil</Dropdown.Item>
        <Dropdown.Item href="/profesiones/anuncios">Carpintero</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHome;
