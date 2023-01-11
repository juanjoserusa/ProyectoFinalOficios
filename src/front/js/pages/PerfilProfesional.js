import React from "react";
import Tab from 'react-bootstrap/Tab';

import React from "react";
import StatusProfesional from "../component/StatusProfesional";
import { SidebarDataProf } from "./sidebarDataProf";


const PerfilProfesional = () => {
  return (
    <div className="container-flex">
      {SidebarDataProf}
      <h4 className="text-center m-5">STATUS</h4>
      <StatusProfesional/>
    </div>
  );
};

export default PerfilProfesional;
