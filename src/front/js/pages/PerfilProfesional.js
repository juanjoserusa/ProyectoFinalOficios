import React from "react";
import { Sidebar } from "../component/sidebar";
import { Footer } from "../component/footer";

const PerfilProfesional = () => {
  return (
    <>
      <div className="container-flex">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <h4 className="text-center m-5">STATUS</h4>
            <h4 className="text-center m-5">mensaje</h4>
            <h4 className="text-center m-5">valoraciones</h4>
           
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilProfesional;
