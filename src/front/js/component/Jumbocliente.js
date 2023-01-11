import React, { useContext, useEffect } from "react";
import background from "/workspace/ProyectoFinalOficios/src/front/assets/cliente.jpg";
import "../../styles/jumbo.css";
import { Link } from "react-router-dom";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

const JumboCliente = () => {
  const { store, actions } = useContext(Context);
  const token = store.token

  useEffect(() => {
    if (token && token != "" && token != undefined)
      actions.getMessage();
  }, [token]);



  return (
    <div className="card text-bg-dark border border-0">
            <h4 className="text-center">{store.message}</h4>
      <img src={background} className="card-img" alt="cliente" />

      <div className="card-img-overlay">
        <div className="row">
          <div className="title ">
            <h1 className="card-title  d-flex justify-content-center ">
              ¿Buscas un profesional?
            </h1>

            <div className="mt-5 d-flex justify-content-center">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <Link to="/login">
              <button type="button " class="btn  btn-lg btnLoginCliente m-2">
                Login
              </button>
              </Link>
              <Link to="/signup">
              <button type="button " class="btn btn-lg btnLoginCliente m-2">
                SignUp
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCliente;
